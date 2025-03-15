# 🎬 Movie Search App

A React-based Movie Search Application that allows users to search for movies using the OMDB API. The app provides a smooth and responsive UI/UX, with features like search recommendations, pagination, and detailed movie information.

## 🚀 Live Demo
[Movie Search App]([https://movie-search-inb6i4tbs-vijaya929s-projects.vercel.app/])

## 📂 Repository Link
[GitHub Repository](https://github.com/vijaya929s-projects/movie-search-app)

---

## 🛠 Setup Instructions
### Prerequisites:
- Node.js (v16 or later)
- npm or yarn

### Clone the Repository:
```sh
git clone https://github.com/vijaya929s-projects/movie-search-app.git
cd movie-search-app
```

### Install Dependencies:
```sh
npm install
# OR
yarn install
```

### Start the Development Server:
```sh
npm run dev
# OR
yarn dev
```
Visit `http://localhost:5173/` to see the app running locally.

### Build for Production:
```sh
npm run build
# OR
yarn build
```

### Deploy to Vercel:
```sh
vercel
```

---

## 📡 API Documentation
The app fetches movie data from the **OMDB API**.

- **API Endpoint:** `https://www.omdbapi.com/?apikey=8e358fc7`
- **Search Movies:** `https://www.omdbapi.com/?s=<query>&apikey=8e358fc7`
- **Movie Details:** `https://www.omdbapi.com/?i=<imdbID>&apikey=8e358fc7`

---

## ✨ Features Implemented
✔️ Search for movies by title
✔️ Display results in a responsive grid format
✔️ Show essential movie details (title, year, poster)
✔️ View full movie details on a separate page
✔️ Handle API loading and error states
✔️ Implement debounced search
✔️ Responsive design for mobile and desktop
✔️ Search input with clear button

---

## 🔥 Future Improvements
🔹 Add filters (year, rating, genre, etc.)
🔹 Implement favorites feature with local storage
🔹 Enhance UI with animations and transitions
🔹 Improve search recommendations
🔹 Add client-side caching for performance optimization

---

## 📝 Deployment Details
The app is deployed using **Vercel**.
- **Production URL:** [Movie Search App](https://movie-search-mamqa4mt1-vijaya929s-projects.vercel.app/)
- **Inspect Deployment Logs:** `vercel logs movie-search-mamqa4mt1-vijaya929s-projects.vercel.app`

---

## ⚠️ Edge Cases Handled
✅ No results found scenario
✅ API errors and failed requests
✅ Invalid input handling
✅ Slow network connections with loading placeholders
✅ Ensuring mobile responsiveness

---

## 📌 Additional Notes
- This project is built using **React + TypeScript + Vite** for optimized performance.
- Styling is handled using CSS modules.
- State management is done using React hooks (`useState`, `useEffect`).
- Error boundaries are implemented to catch unexpected issues.

Enjoy searching for your favorite movies! 🎥🍿

