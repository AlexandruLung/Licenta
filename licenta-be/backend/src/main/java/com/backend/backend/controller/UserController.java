package com.backend.backend.controller;


import com.backend.backend.dto.UserDTO;
import com.backend.backend.model.UserEntity;
import com.backend.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
    @PostMapping("/login")

    public ResponseEntity<?> create(@RequestBody UserDTO chiefComplaintData) {

            userService.create(chiefComplaintData);


        return ResponseEntity.ok(HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public UserEntity getData(@PathVariable final int id) {
        return userService.get(id);
    }
}


