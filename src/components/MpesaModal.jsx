import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Smartphone } from "lucide-react";

function MpesaModal({
  open,
  onClose,
  total,
  booking,
  hotel,
  tours,
}) {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function handlePayment() {
    if (!phone) {
      alert("Please enter your M-Pesa phone number.");
      return;
    }

    setLoading(true);

    // Fake STK Push Delay
    setTimeout(() => {
      setLoading(false);

      onClose();

      navigate("/receipt", {
        state: {
          booking,
          hotel,
          tours,
          total,
          phone,
          paymentMethod: "M-Pesa",
          receiptNumber:
            "TRV-" + Math.floor(Math.random() * 1000000),
          paymentDate: new Date().toLocaleString(),
        },
      });
    }, 3000);
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

      <div className="bg-white rounded-3xl w-full max-w-md p-8 relative shadow-2xl">

        <button
          onClick={onClose}
          className="absolute top-5 right-5"
        >
          <X />
        </button>

        <div className="flex justify-center mb-5">

          <div className="bg-green-100 p-5 rounded-full">

            <Smartphone
              size={40}
              className="text-green-700"
            />

          </div>

        </div>

        <h2 className="text-3xl font-bold text-center text-green-700">
          M-Pesa Payment
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Complete your reservation securely.
        </p>

        <div className="bg-sky-50 rounded-2xl p-5 mt-8">

          <div className="flex justify-between text-lg">

            <span>Total Amount</span>

            <span className="font-bold text-blue-700">
              USD {total}
            </span>

          </div>

        </div>

        <div className="mt-8">

          <label className="font-semibold">
            M-Pesa Phone Number
          </label>

          <input
            type="text"
            placeholder="07XXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded-xl p-4 mt-2"
          />

        </div>

        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold mt-8"
        >
          {loading
            ? "Sending STK Push..."
            : "Pay Now"}
        </button>

        {loading && (
          <p className="text-center text-green-700 mt-5">
            Waiting for M-Pesa confirmation...
          </p>
        )}

      </div>

    </div>
  );
}

export default MpesaModal;