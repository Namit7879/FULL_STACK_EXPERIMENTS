package com.AML_2B.JWTdemo.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.AML_2B.JWTdemo.Entity.Student;

import java.util.List;

@RestController
public class StudentController {
    List<Student> students = List.of(
            new Student(1,"Namit",99),
            new Student(2, "Mokshda", 90)
    );

    @GetMapping("/students")
    public List<Student> getStudents() {
        return students;
    }

    @PostMapping("/students")
    public Student addStudent(@RequestBody Student student) {
        students.add(student);
        return student;
    }
}
