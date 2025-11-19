import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const getData = (data) => console.log(data);

    return (
        <div className="flex justify-center items-center min-h-screen px-4">
            <form onSubmit={handleSubmit(getData)} className="w-full max-w-sm">
                <div className="card bg-base-100 shadow-xl border border-base-200 rounded-xl p-6">

                    <h2 className="text-2xl font-semibold mb-6 text-center">
                        Create Account
                    </h2>

                    <fieldset className="fieldset space-y-4">

                        {/* Email */}
                        <div>
                            <label className="label-text font-medium mb-1 block">Email</label>

                            <input
                                type="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Enter a valid email"
                                    }
                                })}
                                className="input input-bordered w-full rounded-lg"
                                placeholder="Enter your email"
                            />

                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="label-text font-medium mb-1 block">Password</label>

                            <input
                                type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 3,
                                        message: "Password must be at least 3 characters"
                                    }
                                })}
                                className="input input-bordered w-full rounded-lg"
                                placeholder="Enter password"
                            />

                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <div className="flex justify-end">
                            <a className="link link-primary text-sm">Forgot password?</a>
                        </div>

                        <button className="btn btn-neutral w-full mt-2 rounded-lg">
                            Register
                        </button>

                    </fieldset>
                </div>
            </form>
        </div>
    );
};

export default Register;
