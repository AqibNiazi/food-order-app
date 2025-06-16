# 🍽️ Hot.N.Spicy - React Food Order App

A modern, responsive food ordering application built with **React 19** and **Node.js** (dummy backend). Users can browse meals, add them to a cart, adjust quantities, and place orders through a checkout form. The project showcases advanced React features like hooks, Context API, and custom hooks.

## 🚀 Live Preview
[Coming Soon or Add Link Here]

## 🛠️ Tech Stack

- **Frontend:** React 19
- **Backend:** Dummy Node.js Server (for meals API)
- **State Management:** useState, useReducer, Context API
- **HTTP Requests:** Custom Hooks with Fetch API
- **Styling:** CSS Modules

## 📦 Features

- 🍜 **Meal Listing:** Fetch and display meals from a Node.js backend.
- 🛒 **Cart Management:**
  - Add meals to cart
  - Increase/decrease quantity
  - Remove items
- 🧾 **Checkout Form:**
  - Fill out user details
  - Place order
- 🔄 **Efficient State Management:**
  - Local state using `useState` and `useReducer`
  - Global state using `Context API`
- ⚙️ **Custom Hooks:**
  - `useHttp` to handle API requests cleanly and consistently.

## 📁 Folder Structure

```

food-order-app/
│
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Cart/
│   │   ├── Meals/
│   │   ├── UI/
│   │   └── Layout/
│   ├── hooks/
│   │   └── use-http.js
│   ├── store/
│   │   └── cart-context.js
│   ├── App.js
│   └── index.js
├── backend/ (dummy Node.js server)
└── README.md

````

## 🔧 Getting Started

### Prerequisites

- Node.js (v18 or above)
- npm

### 1. Clone the Repository

```bash
git clone https://github.com/AqibNiazi/food-order-app.git
cd food-order-app
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Backend (if available)

Navigate to your backend directory and run:

```bash
node server.js
```

*(Ensure `server.js` is serving meals on an endpoint like `/meals`)*

### 4. Start Frontend

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔍 Key React Concepts Used

* ✅ **React 19 Features**
* 🧠 **useState** for simple local component state.
* 🧮 **useReducer** for managing more complex cart logic.
* 🌐 **Custom HTTP Hook** for reusable and consistent data fetching (`useHttp`).
* 🧵 **Context API** for app-wide cart state management.
* 🧼 **Clean Code & Folder Structure** for scalability and reusability.

## 📸 Screenshots

*Add some screenshots of:*

* Meal Listing Page
* Cart View
* Checkout Form

## 📬 Feedback & Contributions

Contributions, issues and feature requests are welcome!

If you like the project, give it a ⭐ on [GitHub](https://github.com/AqibNiazi/food-order-app).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

> Built with ❤️ by [Aqib Niazi](https://github.com/AqibNiazi)

