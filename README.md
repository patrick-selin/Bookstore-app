# Bookstore App

A simple bookstore application where users can add book information to a Firebase database. Built with React and Firebase, this app leverages Material-UI for design and Vite for development and build processes.

## Prerequisites

* Node.js (v16 or higher recommended)
* Firebase Project with Firestore enabled

## Getting Started
1. Clone the Repository

<code>
git clone https://github.com/patrick-selin/bookstore-app.git
cd bookstore-app
</code>
  
2. Install Dependencies

Install the required packages using npm or yarn:
<code>
npm install
</code>

3. Firebase Setup

    1. Create a new Firebase project at Firebase Console.

    2. Enable Firestore in the Firebase project.

    3. Obtain the Firebase configuration settings:
        - Go to Project Settings > General > Your apps.
        - Copy the Firebase config details (API key, Auth domain, Project ID, etc.).

    4. Create a .env file in the root directory and add the Firebase configuration details:

    <code>

    VITE_FIREBASE_API_KEY=your-api-key
    VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
    VITE_FIREBASE_PROJECT_ID=your-project-id
    VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    VITE_FIREBASE_APP_ID=your-app-id
   </code>

5. Run the Application in Development Mode

Start the development server:
<code>
npm run dev
</code>
The app should now be running at http://localhost:5173.



## Tech Stack

    Frontend: React, Vite, Material-UI, Emotion
    Backend: Firebase Firestore
    Dev Tools: ESLint, Vite, GitHub Pages for deployment

## License

This project is licensed under the MIT License.
