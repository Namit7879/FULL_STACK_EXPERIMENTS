package com.AML_2B.JWTdemo.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.AML_2B.JWTdemo.Entity.UserEntity;
import com.AML_2B.JWTdemo.Service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/register")
    public UserEntity register(@RequestBody UserEntity user) {
        userService.addUser(user);
        return user;
    }
    @GetMapping("/hello")
    public String hello() {
        return "Hello !! Your JWT Authentication is Successful";
    }

    @PostMapping("/login")
    public String login(@RequestBody UserEntity user) {
        return userService.verify(user);
    }
}
