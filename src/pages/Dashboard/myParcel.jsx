import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { FileEdit } from 'lucide-react';
import { FaEye, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyParcel = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['my-parcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data;
        }
    });

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/parcels/${id}`);

                if (res.data.deletedCount) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your parcel has been deleted.",
                        icon: "success"
                    });
                    refetch();
                }
            }
        });
    };

    const handlePayment = async (parcel) => {
        const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            senderEmail: parcel.senderEmail,
            parcelName: parcel.parcelName
        };

        const res = await axiosSecure.post('/payment-checkout-session', paymentInfo);
        window.location.assign(res.data.url);
    };

    return (
        <div>
            <h2 className="mb-3 font-semibold text-lg">
                My Parcels: {parcels.length}
            </h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Cost</th>
                            <th>Payment</th>
                            <th>Delivery Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {parcels.map((parcel, index) => (
                            <tr key={parcel._id}>
                                <td>{index + 1}</td>
                                <td>{parcel.senderRegion}</td>
                                <td>{parcel.receiverRegion}</td>
                                <td>{parcel.cost}</td>

                                {/* Payment column */}
                                <td>
                                    {parcel.paymentStatus === 'paid' ? (
                                        <span className="text-green-500">Paid</span>
                                    ) : (
                                        <button
                                            onClick={() => handlePayment(parcel)}
                                            className="btn btn-sm btn-primary text-black"
                                        >
                                            Pay
                                        </button>
                                    )}
                                </td>

                                {/* Delivery Status */}
                                <td>{parcel.deliveryStatus}</td>

                                {/* Action Buttons */}
                                <td className="flex gap-2">
                                    <button className="btn btn-square">
                                        <FileEdit />
                                    </button>

                                    <button className="btn btn-square">
                                        <FaEye />
                                    </button>

                                    <button
                                        className="btn btn-square"
                                        onClick={() => handleDelete(parcel._id)}
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyParcel;
