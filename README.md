# Travique

Travique is a modern travel planning web application built with React that enables users to discover destinations around the world, explore hotels, restaurants, tourist attractions, view live weather updates, save favorite places, and organize travel experiences in one platform.

The application integrates real-world APIs to provide dynamic travel information while offering users a clean, responsive, and interactive experience.

---

# Project Overview

Planning a trip often requires visiting multiple websites to search for destinations, hotels, restaurants, attractions, and weather information. This process is time-consuming and inconvenient.

Travique solves this problem by bringing all essential travel planning features into one application. Users can explore destinations, search for places, view real-time travel information, and manage their travel plans from a single platform.

---

# Problem Statement

Travel planning is often fragmented across multiple websites and applications. Travelers must switch between different platforms to search for destinations, compare accommodation, check weather conditions, and discover attractions.

There is a need for a centralized travel planning application that provides these services in one place while offering an enjoyable and user-friendly experience.

---

# Proposed Solution

Travique provides a centralized travel platform where users can:

- Register and log into the application.
- Discover destinations around the world.
- Search and filter destinations.
- View detailed destination information.
- Explore nearby hotels.
- Discover restaurants.
- Find tourist attractions.
- View live weather updates.
- Save favorite places.
- Organize personal trips.
- Receive guidance through the Travique Assistant.

---

# Objectives

## Main Objective

To develop a responsive React-based travel planning application that simplifies destination discovery and travel planning.

## Specific Objectives

- Build a modern and responsive user interface.
- Implement secure user authentication using Firebase.
- Integrate multiple real-world APIs.
- Allow users to search and filter destinations.
- Display destination details.
- Display nearby hotels, restaurants, and attractions.
- Provide live weather information.
- Allow users to save favorites.
- Enable users to manage their travel plans.
- Demonstrate modern React development practices.

---

# User Flow

```
Landing Page
      ↓
Get Started
      ↓
Register / Login
      ↓
Home (Authenticated Experience)
      ↓
Search Destination
      ↓
Destination Details
      ↓
Hotels • Restaurants • Attractions • Weather
      ↓
Save Favorite / Add Trip
      ↓
My Profile
```

---

# Features

## Public Features

- Responsive landing page
- Modern navigation bar
- Hero section
- Featured destinations
- Why Choose Travique section
- About page
- Contact page
- Detailed footer

---

## Authentication

Travique uses Firebase Authentication.

Users can:

- Register
- Login
- Logout

After successful authentication, users are redirected to the authenticated Home page, where they can begin exploring destinations and managing their travel plans.

---

## Home Page

The Home page serves two purposes.

### Before Login

The page contains:

- Hero section
- Get Started button
- Featured destinations
- Why Choose Travique
- Footer

### After Login

The Home page becomes personalized and displays:

- Welcome message
- Search bar
- Destination categories
- Featured destinations
- Quick access to user features

---

## Destinations

Users can:

- Browse destinations
- Search destinations
- Filter destinations
- Explore destination details

---

## Destination Details

Each destination includes:

- Destination image
- Description
- Country information
- Current weather
- Nearby hotels
- Nearby restaurants
- Tourist attractions
- Travel tips
- Save to Favorites
- Add to Trip

---

## My Profile

The My Profile page acts as the user's personal dashboard.

Users can view:

- Name
- Email
- Saved favorite destinations
- Saved hotels
- Saved attractions
- Planned trips
- Logout

This page centralizes all user-related information in one location.

---

## Travique Assistant

Travique includes a built-in Travel Assistant available on every page.

The assistant helps users understand how to use the application.

Suggested questions include:

- How do I search for a destination?
- How do I find hotels?
- How do I create a trip?
- How do I save favorites?
- How do I register?
- How do I log in?
- What does this page do?
- Where can I check the weather?

Users may also type supported questions. If a question matches one of the predefined responses, the assistant provides the relevant answer. Otherwise, it suggests choosing one of the available questions.

---

# Technologies Used

- React
- Vite
- Tailwind CSS
- React Router DOM
- Firebase Authentication
- Axios
- Lucide React
- shadcn/ui
- Context API
- JavaScript (ES6+)

---

# APIs

Travique integrates real APIs to provide live travel information.

The application will utilize APIs such as:

- REST Countries API
- OpenWeather API
- Geoapify Places API
- Unsplash API

These APIs provide real-time information including destination details, country information, weather updates, hotels, restaurants, attractions, and destination images.

---

# Project Structure

```
src/
│
├── assets/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── SearchBar.jsx
│   ├── DestinationCard.jsx
│   ├── HotelCard.jsx
│   ├── RestaurantCard.jsx
│   ├── AttractionCard.jsx
│   ├── WeatherCard.jsx
│   ├── TravelAssistant.jsx
│   └── ProtectedRoute.jsx
│
├── context/
│   ├── AuthContext.jsx
│   └── FavoritesContext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Destinations.jsx
│   ├── DestinationDetails.jsx
│   ├── Profile.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── About.jsx
│   └── Contact.jsx
│
├── config/
│   └── firebase.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Installation

Clone the repository.

```bash
git clone https://github.com/AbbieJonnes/travique.git
```

Navigate into the project.

```bash
cd travique
```

Install dependencies.

```bash
npm install
```

Run the development server.

```bash
npm run dev
```

---

# Future Improvements

Future versions of Travique may include:

- AI-powered travel assistant.
- Flight booking integration.
- Hotel reservation system.
- Google Maps integration.
- Travel budget planner.
- Personalized travel recommendations.
- User reviews and ratings.
- Push notifications.
- Multi-language support.
- Travel itinerary sharing.

---

# Author

**Abigael Mwangi**

Email: abigaelmwangi534@gmail.com

GitHub: https://github.com/AbbieJonnes

---

# License

This project is under the MIT License