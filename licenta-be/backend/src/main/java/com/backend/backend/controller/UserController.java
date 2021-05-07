package com.backend.backend.controller;


import com.backend.backend.dto.UserDTO;
import com.backend.backend.model.UserEntity;
import com.backend.backend.repository.UserRepository;
import com.backend.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
@RequestMapping("/licenta")
public class UserController {

	
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;
    @GetMapping("/user")
    public String getUser() {
        return userService.findUserById(0).get().getName();
    }
    @GetMapping("/allUsers")
    public ResponseEntity<List<UserEntity>>  getAllUsers() {
    	List<UserEntity> list=userService.findAllUsers();
    	
    		
    		return ResponseEntity.ok().body(userService.findAllUsers()) ;
    	
	
    }
    @PostMapping("/add-user")
    public ResponseEntity<UserEntity> createUser(@RequestBody UserEntity user) {
    	
    	return ResponseEntity.ok().body(userRepository.save(user));
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


