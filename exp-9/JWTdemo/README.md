# JWT Authentication Demo – Spring Boot

A simple and secure **Spring Boot** project demonstrating **JWT-based authentication** with user registration, login, and protected endpoints.

---

##  Features

*  User Registration (`/register`) – Public endpoint
*  User Login (`/login`) – Returns JWT token
*  Secured Endpoint (`/hello`) – Requires valid JWT
*  JWT Token generation & validation
*  Password encryption using **BCrypt**

---

### Working Code
<img width="600" alt="image" src="https://github.com/user-attachments/assets/fc7d0d76-f5e3-4bba-809b-ccdc98320bb0" />

---

### 1. Register User

* **Method:** `POST`
* **Endpoint:** `/register`

#### Request Body

```json
{
  "username": "testuser",
  "password": "password123"
}
```

#### Example

<p align="center">
  <img src="https://github.com/user-attachments/assets/c2d71389-7712-4229-8305-f8386a4a03b0" width="400"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/810775cf-4bc9-4c81-a95b-1b20f9d85db7" width="600"/>
</p>

---

###  2. Login

* **Method:** `POST`
* **Endpoint:** `/login`

#### Request Body

```json
{
  "username": "testuser",
  "password": "password123"
}
```

#### Example

<p align="center">
  <img src="https://github.com/user-attachments/assets/abff27a6-7b83-45ed-aad0-42cf859b1935" width="400"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/91e98094-707d-44f2-aed0-34796428aed4" width="600"/>
</p>

#### Response

* Returns a **JWT Token** which must be used for authenticated requests.

---

###  3. Access Secured Endpoint

* **Method:** `GET`
* **Endpoint:** `/hello`

#### Headers

<p align="center">
  <img src="https://github.com/user-attachments/assets/7aafac95-a97a-4804-8d7f-1bb0162467f5" width="600"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/bec70050-2662-4f8c-b197-bd4faaa83290" width="600"/>
</p>

---
