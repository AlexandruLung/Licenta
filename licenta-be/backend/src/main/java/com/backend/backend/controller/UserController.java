package com.backend.backend.controller;


import com.backend.backend.dto.LoginDTO;
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
    
    @PostMapping("/user")
    public ResponseEntity<UserEntity> getUser(@RequestBody UserEntity user) {
    	userService.checkLoginCredentials(user.getUsername(), user.getPassword(), userRepository.findAll());
    	return ResponseEntity.ok().body(user);
    }
    @GetMapping("/allUsers")
    public ResponseEntity<List<UserEntity>>  getAllUsers() {
    	List<UserEntity> list=userService.findAllUsers();
    	
    		
    		return ResponseEntity.ok().body(userService.findAllUsers()) ;
    	
	
    }
 
    @PostMapping("/add-user")
    public ResponseEntity<UserEntity> createUser(@RequestBody UserEntity user) {
    	for (UserEntity userEntity : userRepository.findAll()) {
    		userService.checkEmail(user.getEmail());
    		if(user.getEmail().contentEquals(userEntity.getEmail())
    				||user.getUsername().contentEquals(userEntity.getUsername())) {
    			return ResponseEntity.badRequest().body(null);
    		}
    		userService.passwordValidation(user.getPassword());
    		userService.checkUsername(user.getUsername());
    	}
    	return ResponseEntity.ok().body(userRepository.save(user));
    }
  
    @GetMapping("/{id}")
    public UserEntity getData(@PathVariable final int id) {
        return userService.get(id);
    }
}


