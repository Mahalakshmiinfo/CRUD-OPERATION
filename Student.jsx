import { useState,useEffect } from "react";
import axios from "axios";

function Student(){}
    const[student,setStudent]=useState([]);
    const[id,setId]=useState("");
    const[name,setName]=useState("");
    const[course,setCourse]=useState("");

    useEffect(()=>{
        getStudents();
    },[]);
    function getStudents(){
        axios.get("http://localhost:3000/students")
        .then((response)=>{
            setStudent(response.data);
        }).catch((error)=>{
            console.log("data not found");
        })
        function editStudent(Student){
            setId(student.id);
            setName(student.Name);
            setCourse(student.course);
        
    }
    function updateStudent(){
           axios.put("http://localhost:3000/students"/${id},
        {
            id:id,
            name:name,
            course:course,
        }).then(()=>{
            getStudents("");
            setId("");
            setName("");
            setCourse("");
        }).catch((error)=>{
            console.log("data not updated");
            function deleteStudent(id){
                axios.delete('http://localhost:3000/students/${id}')
                .then(()=>{
                    getStudents(" ");
                }0.catch((error)=>{
                    console.log("data not updated");
                });
                    
                }
            }
            return(
            <div style={{textAlign:"center"}}>
            <h1>STUDENT MANAGEMENT SYSTEM</h1>
            <br/>
            <input type="text" placeholder="Enter name"value={name}onChange={(e)=>{
            setName(e.target.value);

    }}/>
    <br/> <br/>
        
            <br/><br/>
            <button>Add data</button>
            <button style={{marginLeft:"10px"}}>Update data</button>
            <br/> <br/>
            <table border="1" align="center" cellPadding="10">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>course</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
            </table>
            </div>
    )
}
export default Student;

        
            
            
        


    

