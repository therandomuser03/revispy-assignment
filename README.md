# Simple E-commerce with Categorization

A simple e-commerce frontend with authentication and category selection, built using **Vite + React + TailwindCSS + TypeScript** and integrated with a **tRPC backend** using **Prisma & SQLite**.

## 🚀 Features
- **User Authentication:** Sign-up and login system with session persistence.
- **Protected Routes:** Only logged-in users can access category selection.
- **Category Selection:** Users can select categories of interest, stored in the database.
- **Pagination:** Displays 6 categories per page.
- **Data Persistence:** User-selected categories persist across sessions.
- **Static Header:** Common header across all pages (non-interactive).

## 🛠 Tech Stack
**Frontend:** React, Vite, TailwindCSS, TypeScript, tRPC

**Backend:** Express.js, tRPC, Prisma, SQLite

## 📂 Folder Structure
```
📦 ecommerce-app
├── 📂 backend
│   ├── prisma/         # Database schema & migrations
│   ├── server.ts       # Express + tRPC server
├── 📂 frontend
│   ├── src/
│   │   ├── pages/      # Login, Register, Categories pages
│   │   ├── components/ # Reusable UI components
│   │   ├── utils/      # API clients (tRPC)
│   ├── index.tsx       # Main React entry point
├── README.md           # Project documentation
├── package.json        # Dependencies & scripts
```

## 📦 Installation
1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/ecommerce-app.git
   cd ecommerce-app
   ```

2. **Install Dependencies**
   ```sh
   cd backend && npm install
   cd ../frontend && npm install
   ```

3. **Setup Database (Prisma + SQLite)**
   ```sh
   cd backend
   npx prisma migrate dev --name init
   ```

4. **Run Backend**
   ```sh
   npm run dev
   ```

5. **Run Frontend**
   ```sh
   cd ../frontend
   npm run dev
   ```

The application should now be running at `http://localhost:5173` (frontend) and `http://localhost:4000` (backend).

## 🚀 Usage
1. **Register an account** on the Sign-up page.
2. **Log in** to access the protected category selection page.
3. **Select categories** and save preferences.
4. **Selections persist** across sessions.

## 📷 Screenshots
_Add screenshots here_

## 📝 Future Improvements
- Implement OAuth authentication
- Add category images
- Enhance UI/UX with animations
- Improve backend security with JWT authentication

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

---
**Developed with ❤️ by Anubhab Pal**

