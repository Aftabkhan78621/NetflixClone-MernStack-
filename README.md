🎬 CineStream: A Premium Full-Stack Streaming Platform
CineStream is a high-performance MERN stack application designed to provide a seamless movie browsing experience. It features real-time data synchronization with the TMDB API, centralized state management using Redux Toolkit, and a secure, custom-built backend for user authentication and data persistence.

🛠️ Tech Stack & Tools
Frontend
React.js & React Router DOM: For building a dynamic and responsive Single Page Application (SPA).

Redux Toolkit: Used for global state management (User auth, Movie data, and Watchlist).

React Icons: For a clean and modern user interface.

Axios: For handling asynchronous API calls to the backend and TMDB.

Tailwind CSS / Styled Components: For a premium, Netflix-inspired UI.

Backend
Node.js & Express.js: To handle RESTful API endpoints and middleware.

MongoDB & Mongoose: For storing user data, encrypted passwords, and personalized watchlists.

JWT (JSON Web Tokens): For secure, stateless user authentication.

Bcrypt.js: For high-level password hashing and security.

CORS: Configured for secure cross-origin communication between Frontend and Backend.

🚀 Key Features & Logic
1. Advanced State Management (Redux)
The app uses Redux Toolkit to manage complex states. This ensures that user data and movie lists are available across all components without "prop drilling," making the app faster and more scalable.

2. TMDB API Integration
I implemented dynamic endpoints to fetch:

Hero Banner: Random trending movie on every refresh.

Categorized Rows: Now Playing, Popular, Top Rated, and Upcoming.

Search Engine: Real-time movie filtering based on user input.

3. Custom Authentication System
Instead of using third-party auth, I built a custom JWT-based system:

Controllers: Separate logic for login, register, and profile.

Routes: Protected routes that only allow logged-in users to access the Watchlist.

4. Scalable Backend Structure
The backend follows the MVC (Model-View-Controller) pattern:

models/: Defines the data structure (User Schema).

controllers/: Contains the business logic for each request.

routes/: Defines the API paths (e.g., /api/v1/user/login)

📂 Project Structure
├── client (Frontend)
│   ├── src
│   │   ├── redux/       # Store, Slices (userSlice, movieSlice)
│   │   ├── components/  # Navbar, MovieCard, Row, Hero
│   │   ├── hooks/       # Custom hooks for API calls
│   │   └── constants/   # TMDB and Backend API Endpoints
│
└── server (Backend)
    ├── models/          # MongoDB Schemas
    ├── controllers/     # Logic for Auth and Watchlist
    ├── routes/          # Express Route definitions
    └── middleware/      # Auth verification logic

🔗 Live Links & Documentation

Live Demo: [https://netflix-clone-mern-stack-d6sf.vercel.app/]

Backend API: [https://cinestream-da71.onrender.com]

API Documentation: [[Insert Postman or GitHub Wiki Link](https://web.postman.co/workspace/Personal-Workspace~3cb024d2-5176-4f92-ac21-1c6474d0debb/collection/42394456-a4cd0c5a-d6d8-4485-b916-8e9617431a55?action=share&source=copy-link&creator=42394456)]

⚙️ Installation
1.Clone & Install:
git clone https://github.com/yourusername/cinestream.git
npm install && cd client && npm install

2.Environment Setup:
Create a .env file in the server directory:
PORT=8000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
TMDB_TOKEN=your_bearer_token

3.Start Developing:
# Root folder
npm run dev

