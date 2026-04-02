package com.AML_2B.JWTdemo.Controller;

import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpServletRequest;

public class HelloController {
	 @GetMapping("/")
	    public String greet(HttpServletRequest request) {
	        return "Welcome to Spring Boot World! " + request.getSession().getId();
	    }
}
