package com.example.studentdata.Service;

import com.example.studentdata.Entity.Student;
import com.example.studentdata.Reporsitory.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    StudentRepository repo;

    public List<Student> getAllStudents(){
        return repo.findAll();
    }
    public Student saveStudent(Student student){
        return repo.save(student);
    }
    public Student updateStudent(Student student){

        return repo.save(student);
    }
    public void deleteStudent(int id ){
        repo.deleteById(id);

    }
}
