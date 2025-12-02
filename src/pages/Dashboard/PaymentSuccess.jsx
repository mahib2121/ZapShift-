import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get("session_id");
    const parcelId = searchParams.get("parcelId");
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (sessionId && parcelId) {
            axiosSecure.patch(`/payment-success?session_id=${sessionId}&parcelId=${parcelId}`)
                .then(res => console.log(res.data))
                .catch(err => console.log(err));
        }
    }, [sessionId, parcelId, axiosSecure]);

    return (
        <div>
            <h2 className="text-4xl">Payment successful</h2>
        </div>
    );
};

export default PaymentSuccess;
