import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData, useRoutes } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';

const SendParcel = () => {
    const { user } = useAuth()
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors }
    } = useForm({
        defaultValues: {
            parcelType: "document"
        }
    });

    const serviceCenter = useLoaderData();
    const axiosSecure = useAxiosSecure();

    // Unique region list
    const RegionDuplicate = serviceCenter.map(c => c.region);
    const region = [...new Set(RegionDuplicate)];

    // Watch selected fields
    const senderRegion = useWatch({ control, name: 'senderRegion' });
    const receiverRegion = useWatch({ control, name: 'receiverRegion' });
    const parcelType = watch("parcelType");

    // Get districts for a region
    const DistrictByRegion = (selectedRegion) => {
        if (!selectedRegion) return [];
        const regionDistrict = serviceCenter.filter(c => c.region === selectedRegion);
        return regionDistrict.map(d => d.district);
    };

    const handleSendParcel = (data) => {
        const isDocument = data.parcelType === 'document';
        const IssameDistrict = data.senderDistrict === data.receiverDistrict;

        const parcelWeight = parseFloat(data.parcelWeight || 0);

        let cost = 0;

        if (isDocument) {
            cost = IssameDistrict ? 60 : 80;
        } else {
            if (parcelWeight < 3) {
                cost = IssameDistrict ? 110 : 150;
            } else {
                const MinCost = IssameDistrict ? 110 : 150;
                const ExtraWeight = parcelWeight - 3;
                const extraCharge = IssameDistrict
                    ? ExtraWeight * 40
                    : ExtraWeight * 40 + 40;

                cost = MinCost + extraCharge;
            }
        }

        console.log("Parcel Cost:", cost);
        data.cost = cost
        Swal.fire({
            title: "Agree with the Cost?",
            text: `You will be charged ${cost} taka!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "I agree!"
        }).then((result) => {
            if (result.isConfirmed) {

                // save the parcel info to the database
                axiosSecure.post('/parcels', data)
                    .then(res => {
                        console.log('after saving parcel', res.data);
                    })

                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        })
    };

    return (
        <div className="p-6">
            <h2 className="text-5xl font-bold mb-6">Send a Parcel</h2>

            <form onSubmit={handleSubmit(handleSendParcel)} className="space-y-8">

                {/* Parcel Type */}
                <fieldset className="border border-gray-300 p-4 rounded-lg">
                    <legend className="font-semibold text-lg px-2">Parcel Type</legend>

                    <div className="flex space-x-8 mt-2">
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                {...register("parcelType", { required: true })}
                                value="document"
                                className="radio radio-success"
                            />
                            <span>Document</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                {...register("parcelType", { required: true })}
                                value="non_document"
                                className="radio radio-success"
                            />
                            <span>Non-Document</span>
                        </label>
                    </div>
                </fieldset>

                {/* Weight field for non-document */}
                {parcelType === "non_document" && (
                    <fieldset className="border border-gray-300 p-4 rounded-lg">
                        <legend className="font-semibold text-lg px-2">Parcel Weight</legend>

                        <input
                            type="number"
                            step="0.01"
                            placeholder="Enter weight (KG)"
                            {...register("parcelWeight", { required: true })}
                            className="input input-bordered w-full"
                        />

                        {errors.parcelWeight && (
                            <p className="text-red-500">Weight is required for non-document parcels</p>
                        )}
                    </fieldset>
                )}

                {/* Two Column Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Sender */}
                    <fieldset className="border border-gray-300 p-4 rounded-lg">
                        <legend className="font-semibold text-lg px-2">Sender Information</legend>

                        <div className="space-y-4 mt-2">

                            <input
                                type="text"
                                placeholder="Sender Name"
                                {...register("senderName", { required: true })}
                                defaultValue={user?.displayName || ""}

                                className="input input-bordered w-full"
                            />
                            {errors.senderName && <p className="text-red-500">Required</p>}

                            <input
                                type="email"
                                placeholder="Sender Email"
                                {...register("senderEmail", { required: true })}
                                className="input input-bordered w-full"
                            />

                            <input
                                type="tel"
                                placeholder="Sender Phone"
                                {...register("senderPhone", { required: true })}
                                className="input input-bordered w-full"
                            />
                            {errors.senderPhone && <p className="text-red-500">Required</p>}

                            <input
                                type="text"
                                placeholder="Sender Address"
                                {...register("senderAddress", { required: true })}
                                className="input input-bordered w-full"
                            />
                            {errors.senderAddress && <p className="text-red-500">Required</p>}

                            {/* Sender Region */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Sender Region</legend>

                                <select
                                    {...register('senderRegion', { required: true })}
                                    defaultValue=""
                                    className="select select-bordered w-full"
                                >
                                    <option disabled value="">Pick a Region</option>
                                    {region.map((r, i) => (
                                        <option key={i} value={r}>{r}</option>
                                    ))}
                                </select>
                            </fieldset>

                            {/* Sender District */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Sender District</legend>

                                <select
                                    {...register('senderDistrict', { required: true })}
                                    defaultValue=""
                                    className="select select-bordered w-full"
                                >
                                    <option disabled value="">Pick a District</option>

                                    {senderRegion &&
                                        DistrictByRegion(senderRegion).map((d, i) => (
                                            <option key={i} value={d}>{d}</option>
                                        ))
                                    }
                                </select>
                            </fieldset>
                        </div>
                    </fieldset>

                    {/* Receiver */}
                    <fieldset className="border border-gray-300 p-4 rounded-lg">
                        <legend className="font-semibold text-lg px-2">Receiver Information</legend>

                        <div className="space-y-4 mt-2">

                            <input
                                type="text"
                                placeholder="Receiver Name"
                                {...register("receiverName", { required: true })}
                                className="input input-bordered w-full"
                            />
                            {errors.receiverName && <p className="text-red-500">Required</p>}

                            <input
                                type="email"
                                placeholder="Receiver Email"
                                {...register("receiverEmail", { required: true })}
                                className="input input-bordered w-full"
                            />

                            <input
                                type="text"
                                placeholder="Receiver Address"
                                {...register("receiverAddress", { required: true })}
                                className="input input-bordered w-full"
                            />
                            {errors.receiverAddress && <p className="text-red-500">Required</p>}

                            <input
                                type="tel"
                                placeholder="Receiver Phone"
                                {...register("receiverPhone", { required: true })}
                                className="input input-bordered w-full"
                            />
                            {errors.receiverPhone && <p className="text-red-500">Required</p>}

                            {/* Receiver Region */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Receiver Region</legend>

                                <select
                                    {...register('receiverRegion', { required: true })}
                                    defaultValue=""
                                    className="select select-bordered w-full"
                                >
                                    <option disabled value="">Pick a Region</option>
                                    {region.map((r, i) => (
                                        <option key={i} value={r}>{r}</option>
                                    ))}
                                </select>
                            </fieldset>

                            {/* Receiver District */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Receiver District</legend>

                                <select
                                    {...register('receiverDistrict', { required: true })}
                                    defaultValue=""
                                    className="select select-bordered w-full"
                                >
                                    <option disabled value="">Pick a District</option>

                                    {receiverRegion &&
                                        DistrictByRegion(receiverRegion).map((d, i) => (
                                            <option key={i} value={d}>{d}</option>
                                        ))
                                    }
                                </select>
                            </fieldset>

                        </div>
                    </fieldset>

                </div>

                <button type="submit" className="btn btn-success text-white">
                    Send Parcel
                </button>

            </form>
        </div>
    );
};

export default SendParcel;
