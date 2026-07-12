package com.example.studentdata.Controller;

import com.example.studentdata.Entity.Student;
import com.example.studentdata.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.lang.model.util.Elements;
import java.util.List;

@RestController
@CrossOrigin(origins ="http://localhost:5173")
@RequestMapping("/students")
public class StudentController {
    @Autowired
    StudentService service;
    @GetMapping
    public List<Student> getStudent(){
        return  service.getAllStudents();

    }
    @PostMapping
    public  Student addStudent(@RequestBody Student student){
        return  service.saveStudent(student);

    }

    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable int id, @RequestBody Student student){
       student.setId(id);
         return service.updateStudent(student);
    }
    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable int id) {
        service.deleteStudent(id);
    }
}