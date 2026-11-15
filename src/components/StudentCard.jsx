//one reusable component for displaying students

import { useStudents } from "../context/StudentContext";

function StudentCard({ student, isFavouritePage = false }) {
  const { favourites, addFavourite, removeFavourite } = useStudents();

  const isAdded = favourites.some(
    (item) => item.id === student.id
  );

  return (
    <div className="student-card">
      <div className="student-avatar">
        {student.name.charAt(0)}
      </div>

      <h3>{student.name}</h3>
      <p className="roll-number">Roll No: {student.rollNo}</p>

      {isFavouritePage ? (
        <button
          className="remove-btn"
          onClick={() => removeFavourite(student.id)}
        >
          Remove Favourite
        </button>
      ) : (
        <button
          className={isAdded ? "added-btn" : "add-btn"}
          onClick={() => addFavourite(student)}
          disabled={isAdded}
        >
          {isAdded ? "✓ Added to Favourites" : "♡ Add to Favourite"}
        </button>
      )}
    </div>
  );
}

export default StudentCard;
