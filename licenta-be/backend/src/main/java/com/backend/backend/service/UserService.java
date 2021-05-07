package com.backend.backend.service;


import com.backend.backend.dto.UserDTO;
import com.backend.backend.model.UserEntity;
import com.backend.backend.repository.UserRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<UserEntity> findUserById(int id){
        return userRepository.findById(id);
    }
    public List<UserEntity> findAllUsers(){
        return userRepository.findAll();
    }
    public UserEntity createUserService(UserEntity user) {
    	return userRepository.save(user);
    }
    public void create(UserDTO userData) {
        UserEntity user=new UserEntity(0,userData.getName(),userData.getSurname(),
                userData.getEmail(), userData.getUsername(), userData.getPassword());


        userRepository.save(user);
    }
    public UserEntity get(final int id) {
        return userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Not found"));
    }

}
