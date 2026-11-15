
import { Link } from "react-router-dom";
import { useStudents } from "../context/StudentContext";
import StudentCard from "../components/StudentCard";

function FavouriteStudents() {
  const { favourites } = useStudents();

  return (
    <main className="page-container">
      <div className="page-heading">
        <span className="eyebrow">YOUR STAR CIRCLE</span>
        <h1>My Favourite Students 💜</h1>
        <p>
          A little space for the classmates who make
          your classroom brighter.
        </p>
      </div>

      {favourites.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">♡</div>
          <h2>No favourite students added yet</h2>
          <p>
            Your star circle is waiting!
            Explore your classmates and add your favourites.
          </p>

          <Link to="/" className="explore-btn">
            Explore Students
          </Link>
        </div>
      ) : (
        <>
          <div className="section-info">
            <h2>Your Star Circle</h2>
            <span>{favourites.length} favourites</span>
          </div>

          <div className="student-grid">
            {favourites.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                isFavouritePage={true}
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
}

export default FavouriteStudents;
