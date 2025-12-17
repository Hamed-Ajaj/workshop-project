# MERN-Stack Workshop Project

This is a full-stack web application built with the MERN stack (replacing MongoDB with MySQL). It includes a React frontend and a Node.js/Express backend.

## Technologies Used

-   **Frontend:**
    -   React
    -   Vite
    -   TypeScript
    -   Tailwind CSS
    -   Axios
-   **Backend:**
    -   Node.js
    -   Express.js
    -   MySQL2
-   **Database:**
    -   MySQL (via Docker)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later)
-   [pnpm](https://pnpm.io/)
-   [Docker](https://www.docker.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Backend Setup:**
    -   Navigate to the `backend` directory:
        ```bash
        cd backend
        ```
    -   Install dependencies:
        ```bash
        pnpm install
        ```
    -   Start the MySQL database using Docker:
        ```bash
        docker-compose up -d
        ```
    -   Create a `.env` file from the `.env.example` and populate it with your database credentials:
        ```
        DATABASE=workshop_db
        DB_HOST=127.0.0.1
        DB_PORT=3306
        DB_PASSWORD=password
        DB_USER=user
        PORT=3000
        ORIGIN_URL="http://localhost:5173"
        ```

3.  **Frontend Setup:**
    -   Navigate to the `frontend` directory:
        ```bash
        cd ../frontend
        ```
    -   Install dependencies:
        ```bash
        pnpm install
        ```
    -   Create a `.env` file and add the backend API URL:
        ```
        VITE_API_URL="http://localhost:3000"
        ```

## Usage

1.  **Start the backend server:**
    -   In the `backend` directory, run:
        ```bash
        pnpm dev:watch
        ```
    -   The server will start on `http://localhost:3000`.

2.  **Start the frontend development server:**
    -   In the `frontend` directory, run:
        ```bash
        pnpm dev
        ```
    -   The application will be available at `http://localhost:5173`.
