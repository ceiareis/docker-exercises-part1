# Docker Exercises - Part 1

Welcome to the **Video Game Catalog Application**! This project is a simple catalog system for video games, designed with a modular architecture where the frontend, backend, and database are each hosted in their own Docker containers.

---

## Project Structure

The project is organized as follows:

### **Frontend**
The frontend provides the user interface for the application, allowing users to interact with the video game catalog.

#### Files:
- `Dockerfile`: Docker configuration for the frontend.
- `index.html`: The main HTML file for the user interface.
- `script.js`: Handles client-side logic and interactions.
- `styles.css`: Contains the styling for the application.

---

### **Backend**
The backend powers the application logic, processes requests from the frontend, and interacts with the database.

#### Files:
- `Dockerfile`: Docker configuration for the backend.
- `server.js`: Main backend server logic using Node.js.
- `database.js`: Script to handle database interactions.
- `package.json` and `package-lock.json`: Node.js dependencies and configurations.
- `database.sqlite`: SQLite database file used for data storage.

---

### **Database**
The database layer stores the video game catalog data and is accessed by the backend.

- SQLite is used as the database solution for simplicity and portability.

---

### **Root**
- `docker-compose.yml`: Orchestrates the containers for the frontend, backend, and database, making it easy to set up the full application stack.

---

## Prerequisites

Make sure you have the following installed on your machine:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## Getting Started

Follow these steps to run the application locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ceiareis/docker-exercises-part1.git
   cd docker-exercises-part1
   ```
2. **Build and Start the Application**
   ```bash
   docker-compose up --build
   ```
3. **Access the Application**
Open your web browser and go to [http://localhost:80](http://localhost:80)
