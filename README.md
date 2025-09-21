# 🎬🍿 𝐍𝐄𝐓𝐅𝐋𝐈𝐗 

A modern responsive web application deployed on Netlify.  
**Live Demo:** https://sparkling-treacle-891b9b.netlify.app/

# 🤖 Introduction
Built with React.js for the user interface, Appwrite for backend services, and styled with TailwindCSS, this Movie App lets users browse trending movies, search titles, and explore content using the TMDB API. It features a responsive layout and a sleek, modern design.

# ⚙️ Tech Stack
⚡️ Appwrite is an open-source Backend-as-a-Service (BaaS) platform that provides developers with a set of APIs to manage authentication, databases, storage, and more, enabling rapid development of secure and scalable applications.

⚡️ React.js is a JavaScript library developed by Meta for building user interfaces. It allows developers to create reusable UI components that manage their own state, leading to more efficient and predictable code. React is widely used for developing single-page applications (SPAs) due to its virtual DOM that improves performance and ease of maintenance.

⚡️ React-use is a collection of essential React hooks that simplify common tasks like managing state, side effects, and lifecycle events, promoting cleaner and more maintainable code in React applications.

⚡️ Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without writing custom CSS, enabling rapid and responsive UI development.

⚡️ Vite is a modern build tool that provides a fast development environment for frontend projects. It offers features like hot module replacement (HMR) and optimized builds, enhancing the development experience and performance.

# 🔋 Features
👉 Browse All Movies: Explore a wide range of movies available on the platform.

👉 Search Movies: Easily search for specific movies using a search function.

👉 Trending Movies Algorithm: Displays trending movies based on a dynamic algorithm.

👉 Modern UI/UX: A sleek and user-friendly interface designed for a great experience.

👉 Responsiveness: Fully responsive design that works seamlessly across devices.

and many more, including code architecture and reusability


# 🤸 Quick Start
Follow these steps to set up the project locally on your machine.

## Prerequisites

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Cloning the Repository

```
git clone https://github.com/esraemad/Netflix-clone.git 
cd movie-app
```

Open http://localhost:5173 in your browser to view the project.

```bash
npm install
```

## Set Up Environment Variables

Create a new file named .env.local in the root of your project and add the following content:

```ruby
VITE_TMDB_API_KEY=
VITE_APPWRITE_PROJECT_ID= 
VITE_APPWRITE_DATABASE_ID= 
VITE_APPWRITE_COLLECTION_ID=
```

Replace the placeholder values with your actual TheMovieDatabase API and Appwrite credentials.

## Running the Project

``` 
npm run dev
```


<p align="center"> <img width="367" height="898" alt="image" src="https://github.com/user-attachments/assets/9eec201a-9aba-4d74-b12e-3fe4a79faec7" /> </p>

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
