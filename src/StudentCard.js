function StudentCard({ student }) {
    return (
        <div style={{ border: "2px solid black", marginLeft: "500px", marginRight: "500px",  }}>
            <h3>Name: {student.name}</h3>
            <p><strong>Username:</strong> {student.username}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>City:</strong> {student.address.city}</p>
            <form>
            </form>
        </div>
    );
}

export default StudentCard;
