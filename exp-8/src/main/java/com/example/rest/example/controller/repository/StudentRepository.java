package com.example.rest.example.controller.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.rest.example.model.Student;

public interface StudentRepository extends JpaRepository<Student,Integer>{
}
