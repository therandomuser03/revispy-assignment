# Simple E-commerce

A simple e-commerce frontend with authentication and category selection, built using **Vite + React + TailwindCSS + TypeScript** and integrated with a **tRPC** using **Firebase**.

## 🚀 Features
- **User Authentication:** Sign-up and login system with session persistence.
- **Protected Routes:** Only logged-in users can access category selection.
- **Category Selection:** Users can select categories of interest, stored in the database.
- **Pagination:** Displays 6 categories per page.
- **Data Persistence:** User-selected categories persist across sessions.
- **Static Header:** Common header across all pages (non-interactive).

## 🛠 Tech Stack
**Frontend:** React, Vite, TailwindCSS, TypeScript, tRPC

**Backend:** Firebase


## 📦 Installation
1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/ecommerce-app.git
   cd ecommerce-app
   ```

2. **Install Dependencies**
   ```sh
   npm create vite@latest
   cd /product-name
   npm install
   npm install react-paginate
   npm install tailwindcss @tailwindcss/vite
   npm install @trpc/client @trpc/server
   npm install @faker-js/faker
   npm install firebase
   npm install --save-dev @types/react @types/react-dom

3. **Run Project**
   ```sh
   npm run dev
   ```

The application should now be running at `http://localhost:5173`.

## 🚀 Usage
1. **Register an account** on the Sign-up page.
2. **Log in** to access the protected category selection page.
3. **Select categories** and save preferences.
4. **Selections persist** across sessions.

## 📷 Screenshots
![image](https://github.com/user-attachments/assets/560a4704-8e4c-44ea-bc77-f69be52cccf6)


## 📝 Future Improvements
- Implement OAuth authentication
- Add category images
- Enhance UI/UX with animations
- Improve backend security with JWT authentication

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

---
**Developed with ❤️ by Anubhab Pal**

