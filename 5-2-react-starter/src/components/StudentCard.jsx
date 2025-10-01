function StudentCard({ name, id, department }) {
    return (
        <div className="student-card" style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0", borderRadius: "8px" }}>
            <h3>{name}</h3>
            <p>ID: {id}</p>
            <p>Department: {department}</p>
        </div>
    );
}
export default StudentCard;
