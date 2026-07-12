import { useState, useEffect } from "react";
import axios from "axios";

function Student() {
  const [students, setStudents] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    getStudents();
  }, []);


  function getStudents() {
    axios
      .get("http://localhost:8080/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

 
  function addStudent() {
    axios
      .post("http://localhost:8080/students", {
        name: name,
        course: course,
      })
      .then(() => {
        getStudents();
        setName("");
        setCourse("");
      })
      .catch(() => {
        console.log("Data not added");
      });
  }

   
  function editStudent(student) {
    setId(student.id);
    setName(student.name);
    setCourse(student.course);
  }
 
  function updateStudent() {
    axios
      .put(`http://localhost:8080/students/${id}`, {
        id: id,
        name: name,
        course: course,
      })
      .then(() => {
        getStudents();
        setId("");
        setName("");
        setCourse("");
      })
      .catch(() => {
        console.log("Data not updated");
      });
  }

  
  function deleteStudent(id) {
    axios
      .delete(`http://localhost:8080/students/${id}`)
      .then(() => {
        getStudents();
      })
      .catch(() => {
        console.log("Data not deleted");
      });
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>DSU CRUD OPERATION</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addStudent}>Add Data</button>

      <button
        onClick={updateStudent}
        style={{ marginLeft: "10px" }}
      >
        Update Data
      </button>

      <br />
      <br />

      <table border="1" cellPadding="10" style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>
                <button onClick={() => editStudent(student)}>
                  Edit
                </button>
              </td>
              <td>
                <button onClick={() => deleteStudent(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student;