import EmployeeSkills from "./EmployeeSkills";
import Paper from '@mui/material/Paper';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
function EmployeeCard({ employee }) {
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
                <h2>Employee Details</h2>
                <Paper elevation={10}
                    style={{
                        width: "30%",
                        marginLeft: "200px",
                        backgroundColor: "gray"
                    }}>
                    <p>Name: {employee.name}</p>
                    <p>Role: {employee.role}</p>
                    <p>Salary: ₹{employee.salary}</p></Paper>
            </Paper>
                <Badge badgeContent={98} color="primary" >
                    <MailIcon />
                </Badge>
            <EmployeeSkills skills={employee.skills} />
        </div>
    );
}

export default EmployeeCard;