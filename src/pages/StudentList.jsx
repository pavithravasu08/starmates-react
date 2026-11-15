
import students from "../data/students";
import StudentCard from "../components/StudentCard";

function StudentList() {
  return (
    <main className="page-container">
      <div className="page-heading">
        <span className="eyebrow">YOUR CLASSROOM</span>
        <h1>Meet Your Classmates ✨</h1>
        <p>
          Every student brings something special.
          Pick your favourites and build your star circle!
        </p>
      </div>

      <div className="section-info">
        <h2>All Students</h2>
        <span>{students.length} students</span>
      </div>

      <div className="student-grid">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </main>
  );
}

export default StudentList;
