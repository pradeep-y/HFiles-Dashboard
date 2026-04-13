# 🗂 HFiles Dashboard
## Live URL
https://pradeep-hfiles-dashboard.netlify.app/

A mini **Medical Record Dashboard** built with **Next.js (App Router)**, **React**, and **TailwindCSS**. This project demonstrates a clean, component-based UI with basic state handling and mock API stubs, ready to integrate with a backend.

---

## 🚀 Features

* **Authentication (Sign-up placeholder)** – can be extended with session-based auth.
* **Profile Management**

  * Default avatar + option to change
  * Editable Email, Phone, and Gender fields
  * Save button with API stub
* **File Upload**

  * Select file type (Lab Report, Prescription, etc.)
  * Input custom file name
  * Upload PDF or Image files
  * Submit button with API stub
* **Uploaded Files Preview**

  * Grid view of uploaded files
  * File name + type shown
  * View & Delete buttons
* **Responsive Design** with TailwindCSS

---
<img width="1919" height="893" alt="image" src="https://github.com/user-attachments/assets/42215779-3d70-467a-a611-c436c437fead" />


## 📂 Folder Structure

```
hfiles-dashboard/
│
├── app/
│   ├── api/
│   │   ├── profile/route.js
│   │   ├── upload/route.js
│   │   └── delete/route.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── components/
│   ├── Header.js
│   ├── ProfileCard.js
│   ├── FileUploadForm.js
│   └── FilePreviewCard.js
│
├── public/
│   └── default-profile.png
│
├── tailwind.config.js
└── package.json
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/hfiles-dashboard.git
cd hfiles-dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup TailwindCSS

Already configured in `tailwind.config.js` and `globals.css`.

### 4. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

---

## 🧩 API Stubs (Frontend Integration Ready)

* `POST /api/profile` → Saves profile details (mock).
* `POST /api/upload` → Handles file uploads (mock).
* `POST /api/delete` → Deletes a file (mock).

> These are **stubs** – replace logic with real DB/storage in `.NET backend` or any service.

---

## 🔧 Tech Stack

* **Frontend:** Next.js (App Router), React, TailwindCSS
* **Backend (Planned):** ASP.NET, SQL/MySQL (not included in this repo)

---

## 📤 Deployment

Deploy easily on [Vercel](https://vercel.com/) or any platform supporting Next.js.

---

## 📌 Notes

* This repo contains **UI + API stubs only**.
* You can directly plug in your backend APIs later.
* Fully responsive for mobile and desktop.

---

## 👨‍💻 Author

Pradeep Yadav
📧 [pradeepsyadav2004@gmail.com](mailto:pradeepsyadav2004@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/pradeep-yadav-b14a35229)
💻 [GitHub](https://github.com/pradeep-y)

---

✅ Ready for extension with real backend + authentication!
