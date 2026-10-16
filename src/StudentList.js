import StudentCard from "./StudentCard";

function StudentList({ students, isLoading }) {
  if (isLoading) {
    return <p>Loading students...</p>;
  }

  return (
    <div>
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}

export default StudentList;
