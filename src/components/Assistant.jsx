import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Bot,
  X,
  Send,
  MapPin,
  User,
  Phone,
  CreditCard,
  Plane,
} from "lucide-react";

function Assistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "assistant",
      text: " Hello! I'm the Travique Travel Assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  function sendMessage(message) {
    const text = message || input;

    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text,
      },
    ]);

    const lower = text.toLowerCase();

    let reply =
      "Sorry, I didn't understand that. Try asking about bookings, reservation, payment, profile, destinations or contact.";

    if (
      lower.includes("book") ||
      lower.includes("booking")
    ) {
      reply =
        "To book a trip:\n\n1. Login\n2. Choose a destination\n3. Submit your booking\n4. Wait for admin approval.";
    }

    else if (
      lower.includes("reservation")
    ) {
      reply =
        "Once your booking is approved you'll continue with reservation where you'll choose a hotel, optional tours and proceed to payment.";
    }

    else if (
      lower.includes("hotel")
    ) {
      reply =
        "Hotels are selected during the Reservation stage after your booking has been approved.";
    }

    else if (
      lower.includes("payment") ||
      lower.includes("mpesa")
    ) {
      reply =
        "Travique currently uses M-Pesa for payments. After confirming your reservation you'll be prompted to pay and receive your receipt.";
    }

    else if (
      lower.includes("profile")
    ) {
      reply =
        "Your profile contains your bookings, favourites and receipts.";

      setTimeout(() => navigate("/profile"), 1200);
    }

    else if (
      lower.includes("destination") ||
      lower.includes("trip")
    ) {
      reply =
        "You can explore destinations from the Destinations page.";

      setTimeout(() => navigate("/destinations"), 1200);
    }

    else if (
      lower.includes("contact")
    ) {
      reply =
        "Need assistance? I'll take you to the Contact page.";

      setTimeout(() => navigate("/contact"), 1200);
    }

    else if (
      lower.includes("about")
    ) {
      reply =
        "I'll take you to the About page.";

      setTimeout(() => navigate("/about"), 1200);
    }

    else if (
      lower.includes("hello") ||
      lower.includes("hi")
    ) {
      reply =
        "Hello , How may I assist you today?";
    }

    else if (
      lower.includes("where am i")
    ) {
      reply = `You're currently on ${location.pathname}`;
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          text: reply,
        },
      ]);
    }, 600);

    setInput("");
  }

  return (
    <>
      {/* Floating Button */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-blue-700 hover:bg-blue-800 text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center"
      >
        {open ? <X size={28} /> : <Bot size={28} />}
      </button>

      {/* Chat */}

      {open && (
        <div className="fixed bottom-24 right-6 w-96 max-h-[650px] bg-white rounded-3xl shadow-2xl overflow-hidden z-50">

          <div className="bg-blue-700 text-white p-5">

            <h2 className="font-bold text-xl">
              Travique Travel Assistant
            </h2>

            <p className="text-sm opacity-90">
              Ask me anything about Travique.
            </p>

          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-3 bg-sky-50">

            {messages.map((msg, index) => (

              <div
                key={index}
                className={`p-3 rounded-2xl max-w-[80%] whitespace-pre-line ${
                  msg.sender === "assistant"
                    ? "bg-white"
                    : "bg-blue-700 text-white ml-auto"
                }`}
              >
                {msg.text}
              </div>

            ))}

          </div>

          {/* Quick Actions */}

          <div className="p-3 border-t grid grid-cols-2 gap-2">

            <button
              onClick={() => sendMessage("booking")}
              className="bg-gray-100 rounded-xl p-2 text-sm flex items-center justify-center gap-2"
            >
              <Plane size={16} />
              Booking
            </button>

            <button
              onClick={() => sendMessage("reservation")}
              className="bg-gray-100 rounded-xl p-2 text-sm flex items-center justify-center gap-2"
            >
              <MapPin size={16} />
              Reservation
            </button>

            <button
              onClick={() => sendMessage("payment")}
              className="bg-gray-100 rounded-xl p-2 text-sm flex items-center justify-center gap-2"
            >
              <CreditCard size={16} />
              Payment
            </button>

            <button
              onClick={() => sendMessage("profile")}
              className="bg-gray-100 rounded-xl p-2 text-sm flex items-center justify-center gap-2"
            >
              <User size={16} />
              Profile
            </button>

            <button
              onClick={() => sendMessage("destinations")}
              className="bg-gray-100 rounded-xl p-2 text-sm flex items-center justify-center gap-2"
            >
              <MapPin size={16} />
              Destinations
            </button>

            <button
              onClick={() => sendMessage("contact")}
              className="bg-gray-100 rounded-xl p-2 text-sm flex items-center justify-center gap-2"
            >
              <Phone size={16} />
              Contact
            </button>

          </div>

          {/* Input */}

          <div className="flex p-3 border-t">

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Ask me anything..."
              className="flex-1 border rounded-xl px-3 py-2 outline-none"
            />

            <button
              onClick={() => sendMessage()}
              className="ml-2 bg-blue-700 text-white px-4 rounded-xl"
            >
              <Send size={18} />
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default Assistant;