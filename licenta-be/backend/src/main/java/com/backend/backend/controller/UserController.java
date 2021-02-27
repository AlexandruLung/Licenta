package com.backend.backend.controller;


import com.backend.backend.model.UserEntity;
import com.backend.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

@Controller
@RequestMapping("/login")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public Optional<UserEntity> getUser() {
        return userService.findUserById(1);
    }
    @PostMapping("/add-user")
    public UserEntity createUser(@RequestBody UserEntity user) {
    	return userService.createUserService(user);
    }
}
