package com.example.rest.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.rest.example.model.Student;
import com.example.rest.example.controller.repository.StudentRepository;

@Service
public class StudentService {

	@Autowired
    private StudentRepository repository;

    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    public Student saveStudent(Student student) {
        return repository.save(student);
    }
    
	public Student getStudentById(int id) {
    	return repository.findById(id).orElse(null);
    }
	public Student updateStudent(int id,Student student) {
		student.setId(id);
        return repository.save(student);
    }
	public void deleteStudent(int id) {
		repository.deleteById(id);
	}
}
