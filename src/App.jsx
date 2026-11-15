
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";
import "./App.css";

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route
            path="/favourites"
            element={<FavouriteStudents />}
          />
        </Routes>

        <footer className="footer">
          Made with ♡ for brighter classrooms | StarMates
        </footer>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;
