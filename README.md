# ⭐ StarMates – Favourite Student List

### Every classroom has its stars. Keep yours close! 💜

StarMates is a simple, interactive, and responsive **Favourite Student List Application** built using **React JS**. It allows users to explore a list of students, add their favourite classmates, and manage their favourites effortlessly.

This project demonstrates essential React concepts such as **React Router, Context API, useState, useContext, props, dynamic rendering, and conditional rendering**.

---

## ✨ Features

- 🎓 **Student List:** Displays student details, including names and roll numbers.
- 💜 **Add to Favourites:** Add students to your personal favourites list.
- ✅ **Duplicate Prevention:** Prevents the same student from being added multiple times.
- 🗑️ **Remove Favourites:** Easily remove students from the favourites list.
- 🔄 **Global State Management:** Uses React Context API to share favourites across components.
- 🧭 **Smooth Navigation:** React Router enables navigation without full-page reloads.
- 🔢 **Live Favourite Counter:** Displays the total number of favourite students.
- 📭 **Empty State:** Shows a friendly message when no favourite students are selected.
- 📱 **Responsive Design:** Works across desktop, tablet, and mobile devices.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React JS | Building reusable UI components |
| JavaScript (ES6+) | Application logic |
| React Router DOM | Page navigation |
| Context API | Global state management |
| React Hooks | Managing and accessing state |
| CSS3 | Styling and responsive design |
| Vite | Development and build tool |
| Git & GitHub | Version control |
| Vercel | Application deployment |

---

## 📂 Project Structure

```text
starmates/
│
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── StudentCard.jsx
│   │
│   ├── context/
│   │   └── StudentContext.jsx
│   │
│   ├── data/
│   │   └── students.js
│   │
│   ├── pages/
│   │   ├── StudentList.jsx
│   │   └── FavouriteStudents.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/pavithravasu08/starmates-react.git
```

### 2. Navigate to the Project

```bash
cd starmates-react
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal, typically:

`http://localhost:5173/`

---

## 📖 How It Works

### 1. Student List Page

The Student List page displays student information dynamically using JavaScript's `map()` method.

Each student card contains:

- Student name
- Roll number
- Profile avatar
- Add to Favourite button

When a student is added, the button changes to **Added to Favourites**.

### 2. Favourite Students Page

The Favourite Students page displays all selected students.

Users can remove students from their favourites at any time.

If no students are selected, the application displays:

**"No favourite students added yet."**

### 3. Global State Management

The application uses React Context API to manage favourite students across pages.

- `createContext()` creates the Student Context.
- `useState()` maintains the favourite student list.
- `useContext()` accesses the shared state.
- `some()` checks whether a student is already added.
- `filter()` removes students from the list.

This avoids unnecessary prop drilling and keeps the application simple.

### 4. React Router

React Router handles navigation between:

| Route | Page |
|---|---|
| `/` | Student List |
| `/favourites` | Favourite Students |

The `<Link>` component allows users to navigate without reloading the entire page.

---

## 🧠 React Concepts Demonstrated

**Functional Components:** Build reusable components using JavaScript functions.

**Props:** Pass student information to the StudentCard component.

**useState:** Manage favourite student data.

**createContext:** Create a globally accessible context.

**useContext:** Share and update favourite students across pages.

**Conditional Rendering:** Display different buttons and messages depending on application state.

**map():** Render student cards dynamically.

**Event Handling:** Handle add and remove button clicks.

**React Router:** Manage multiple pages within a single-page application.

---

## 📱 Responsive Design

StarMates uses CSS Grid, Flexbox, media queries, rounded cards, soft lavender colours, and hover effects to create a clean and user-friendly interface.

The layout automatically adjusts for desktop, tablet, and mobile screens.

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

1. Creating React functional components.
2. Implementing navigation using React Router.
3. Managing global state with Context API.
4. Using React Hooks effectively.
5. Rendering dynamic data using arrays.
6. Preventing duplicate entries.
7. Implementing conditional rendering.
8. Building responsive interfaces.
9. Managing project versions using Git and GitHub.
10. Preparing a React application for deployment.

---

## 🔮 Future Enhancements

- Search students by name or roll number.
- Add student profile pictures.
- Save favourites using localStorage.
- Add sorting and filtering options.
- Introduce dark mode.
- Add animations and toast notifications.

---

## 👩‍💻 Developer

**Pavithra Ravikumar**

Full Stack Web Development Student

**GitHub:** [pavithravasu08](https://github.com/pavithravasu08)

**Project Repository:** [StarMates React](https://github.com/pavithravasu08/starmates-react)

---
