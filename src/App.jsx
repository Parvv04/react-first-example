import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  function addStudent() {
    if (name.trim() === "") {
      return;
    }

    setStudents([...students, 
      {
        id: students.length + 1,
        name: name
      }
    ]);

    setName("");
  }

  return (
    <div>

      <input 
        value = {name} 
        onChange = { (event) => {
          setName(event.target.value);
        }}
      />

      <button 
        onClick = {addStudent}>
          Add Student
      </button>

      {
        students.length === 0 ?
          <p>No students added yet.</p>
          : (
            <ul>
              {students.map((student) => (
                <li key = {student.id}>{student.name}</li>
              ))}
            </ul>
          )
        }

        <p>Total students: {students.length}</p>
    </div>
  )
}

export default App

