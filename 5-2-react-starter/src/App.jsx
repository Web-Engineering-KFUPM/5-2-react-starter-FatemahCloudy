import './App.css'
import StudentCard from "./components/StudentCard"

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {
              function App() {
              return (
              <div>
              <h1>Students List</h1>
              <StudentCard name="Fatemah Hasan" id="202230260" department="Computer Science" />
              <StudentCard name="Zainab Ali" id="202231760" department="Electrical Engineering" />
              </div>
              );
          }
          }

        </div>
      </main>
    </div>
  )
}

export default App
