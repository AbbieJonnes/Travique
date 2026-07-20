# Travique

Travique is a modern travel booking and reservation web application that simplifies the travel planning process from destination discovery to booking approval, reservation, payment, and receipt generation. The platform provides users with an easy and secure way to plan trips while allowing administrators to manage bookings efficiently.

---

## Live Demo

https://travique-orpin.vercel.app/

---

## Project Overview

Travique was developed as a frontend capstone project using React. It focuses on creating a complete travel booking workflow with user authentication, booking management, admin approval, reservation, payment simulation, and receipt generation.

The application also integrates external APIs to provide real hotel and attraction suggestions based on the selected travel destination.

---

## Features

### User Authentication

- User Registration
- User Login
- Firebase Authentication
- Protected Routes
- User Profiles

### Destination Management

- Browse travel destinations
- Destination search
- Destination filtering
- Destination details page

### Booking System

- Book destinations
- Booking confirmation
- Booking history
- Booking approval status

### Admin Dashboard

- View all bookings
- Approve bookings
- Reject bookings
- View all registered users

### Email Notifications

EmailJS integration is used to send:

- Booking confirmation email
- Booking approval email
- Booking rejection email

### Reservation System

After approval users can:

- Continue reservation
- Select hotels
- Select optional tours
- View reservation summary

### Payment

- M-Pesa payment modal
- Payment confirmation
- Receipt generation

### User Profile

Users can access:

- Booking history
- Reservation details
- Receipts
- Favourite destinations

### Travel Assistant

Travique includes a floating travel assistant available throughout the application that helps users navigate the platform and answer common questions.

### Additional Pages

- Home
- About
- Contact
- Not Found (404)

### Theme Support

- Light Theme
- Dark Theme

---

## Technologies Used

### Frontend

- React
- React Router DOM
- Tailwind CSS
- JavaScript (ES6)
- Vite

### Backend Services

- Firebase Authentication
- Firebase Firestore

### APIs

- Geoapify Geocoding API
- Geoapify Places API
- EmailJS

### UI Libraries

- Lucide React
- Shadcn UI

---

## Project Structure

```text
src/
│
├── components/
├── config/
├── context/
├── pages/
├── services/
├── assets/
├── App.jsx
└── main.jsx
```

---

## Booking Workflow

1. User registers or logs in.
2. User browses available destinations.
3. User selects a destination.
4. User submits a booking request.
5. Booking is stored in Firestore.
6. Confirmation email is sent.
7. Administrator reviews the booking.
8. Administrator approves or rejects the booking.
9. Approval email contains a reservation link.
10. User selects a hotel.
11. User selects optional tours.
12. Reservation summary is generated.
13. User completes payment.
14. Receipt is generated and stored.

---

## Installation

Clone the repository

```bash
git clone https://github.com/AbbieJonnes/travique.git
```

Navigate into the project

```bash
cd travique
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

---

## Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=

VITE_GEOAPIFY_API_KEY=
```

---

## Future Improvements

- Real M-Pesa STK Push integration
- Hotel booking confirmation
- Flight booking integration
- Google Maps integration
- Destination reviews
- Wishlist synchronization
- Booking cancellation
- Real payment gateway
- AI-powered travel recommendations
- Multi-language support

---

## Author

**Abigael Mwangi**

GitHub: https://github.com/AbbieJonnes

Email: abigaelmwangi534@gmail.com

---

## License

This project is under the MIT License