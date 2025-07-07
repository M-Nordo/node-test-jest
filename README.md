# 🧪 Node.js Microservices with Jest Testing

This project demonstrates a basic microservice architecture using **Node.js**, with an **API Gateway** and fully tested services using **Jest** and **Supertest**.

Each microservice handles a specific domain (users, products, orders), and a central API Gateway routes requests using **Express** and **Axios**.

---

## 🚀 Features

- 📦 Separate services for Users, Products, and Orders
- 🌐 API Gateway for routing
- 🧪 Unit testing with Jest and Supertest
- 🔄 Modular Express structure (Controller + Router)
- 📦 Lightweight, fast, and beginner-friendly setup

---

## 🧪 Test Summary

```bash
-npm test

PASS  tests/userService.test.js
PASS  tests/productService.test.js
PASS  tests/orderService.test.js

Test Suites: 3 passed, 3 total
Tests:       6 passed, 6 total
