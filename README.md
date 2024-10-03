# **PropertyKart**

**PropertyKart** is a property listing platform that allows users to log in or sign up and search for properties based on location. The platform displays available properties as well as recommended properties from nearby cities.

---
for property search use cities - mumbai , delhi ,jaipur

## **Features**

- **User Authentication:** Users can log in or sign up using their credentials.
- **Property Search:** Users can search for properties by location.
- **Recommended Properties:** Nearby city properties are displayed as recommendations.
- **Responsive Design:** Optimized for both desktop and mobile devices.

---

## **Tech Stack**

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **File Upload:** Multer (for image uploads)

---

## **Installation**

### **Prerequisites:**

- Node.js installed on your machine.
- MongoDB instance running locally or in the cloud (e.g., MongoDB Atlas).

### **Steps to install:**

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/PropertyKart.git
    cd PropertyKart
    ```

2. **Install dependencies for both backend and frontend:**

    - **Backend:**

      ```bash
      cd server
      npm install
      ```

    - **Frontend:**

      ```bash
      cd client
      npm install
      ```

3. **Create a `.env` file in the backend (`server` directory) and add the following details:**

    ```bash
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    CLOUDINARY_URL=your_cloudinary_url
    ```

4. **Start the backend:**

    ```bash
    cd server
    npm start
    ```

5. **Start the frontend:**

    ```bash
    cd client
    npm start
    ```

---

## **Usage**

### **1. SignUp and Login**
- Users can create an account or log in using the credentials stored in the database.

### **2. Property Search**
- After logging in, the user can enter a location to search for available properties.
- Based on the location entered, a list of properties will be displayed.

### **3. Recommended Properties**
- Along with the searched properties, recommended properties from nearby cities are displayed.

---

## **Screenshots**

### **1. Sign Up**

![SignUp Page](https://github.com/shankarthakur512/PropertyKart/blob/main/Screenshot%202024-10-04%20at%201.12.30%E2%80%AFAM.png?raw=true)

### **2. Property Search Modal**

![Property Search Modal](https://github.com/shankarthakur512/PropertyKart/blob/main/Screenshot%202024-10-04%20at%201.13.55%E2%80%AFAM.png?raw=true)

### **3. Property Listing**

![Property Listing](https://github.com/shankarthakur512/PropertyKart/blob/main/Screenshot%202024-10-04%20at%201.14.36%E2%80%AFAM.png?raw=true)

### **4. Recommended Properties Section**

![Home Page](https://github.com/shankarthakur512/PropertyKart/blob/main/Screenshot%202024-10-04%20at%201.12.30%E2%80%AFAM.png?raw=true)

---

## **API Routes**

- **POST /api/users/login** - Login user.
- **POST /api/users/signup** - Signup user.
- **POST /api/properties/search** - Fetch properties based on location.

---

## **Contributing**

Contributions are welcome! Feel free to open issues or submit pull requests to improve the platform.

---

## **License**

This project is licensed under the MIT License.

