package com.example.studentdata.Reporsitory;
import com.example.studentdata.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
public interface StudentRepository extends JpaRepository<Student,Integer> {
}
