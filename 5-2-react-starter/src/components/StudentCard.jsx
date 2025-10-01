function StudentCard(props) {
    return (
        <div className="student-card" style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0", borderRadius: "8px" }}>
            <h3>{props.name}</h3>
            <p>ID: {props.id}</p>
            <p>Department: {props.department}</p>
        </div>
    );
}
export default StudentCard;
