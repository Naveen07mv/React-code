import Paper from '@mui/material/Paper';
function Student({ student }) {
  return (
    <div>
      <Paper elevation={10}
        style={{
          marginLeft: "400px",
          marginTop: "100px",
          width: "40%",
          height: "30vh",
          textAlign: "center",
          backgroundColor: "lavender"
        }}>
        <h2>Student Information</h2>
        <Paper elevation={10}
          style={{
            width: "30%",
            marginLeft: "200px",
            backgroundColor: "gray"
          }}>
          <p>Name: {student.name}</p>
          <p>Department: {student.department}</p></Paper>
      </Paper>
    </div>
  );
}

export default Student;