package com.backend.backend.service;


import com.backend.backend.dto.UserDTO;
import com.backend.backend.exception.ResourceNotFoundException;
import com.backend.backend.model.UserEntity;
import com.backend.backend.repository.UserRepository;


import java.lang.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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
    public void checkEmail(String email) {
    	for (UserEntity user : userRepository.findAll()) {
			if(email==null||email.isEmpty()) {
				throw new ResourceNotFoundException("Email is empty");
			}
			if(email.contentEquals(user.getEmail())) {
				throw new ResourceNotFoundException("Email is already used");
			}
		}
    	consistencyOfEmail(email);
    	
    }
    public void consistencyOfEmail(String email) {
    	Pattern pattern=Pattern.compile("^(.+)@(.+)$");
    	Matcher matcher=pattern.matcher(email);
    	if(!matcher.matches()) {
    		throw new ResourceNotFoundException("Email is not valid");
    	}
    	
    }
    public void checkUsername(String username) {
    	if(username==null || username.isEmpty()) {
    		throw new ResourceNotFoundException("Username is empty");
    	}
    	for (UserEntity user :userRepository.findAll() ) {
			if(username.contentEquals(user.getUsername())) {
				throw new ResourceNotFoundException("Username already used");
			}
		}
    }
    private boolean capitalLetter(String password) {
    	for (char letter : password.toCharArray()) {
			if(Character.isUpperCase(letter)) {
				return true;
			}
		}
    	return false;
    }
    private boolean specialCharacter(String password) {
    	Pattern pattern = Pattern.compile("[^a-z0-9 ]", Pattern.CASE_INSENSITIVE);
    	Matcher matcher=pattern.matcher(password);
    	if(matcher.find()) {
    		return true;
    	}
    	return false;
    }
    private boolean containNumber(String password) {
    	Pattern pattern =Pattern.compile(".*\\d.*");
    	Matcher matcher=pattern.matcher(password);
    	if(matcher.find()) {
    		return true ;
    	}
    	return false;
    }
    public void passwordValidation(String password) {
			
			if(password.length()<8) {
				throw new ResourceNotFoundException("The password is too short");
			}
			if(!containNumber(password)) {
				throw new ResourceNotFoundException("Must contain numbers");
			}
			if(!specialCharacter(password)) {
				throw new ResourceNotFoundException("Must contain a special character");
			}
			if(!capitalLetter(password)) {
				throw new ResourceNotFoundException("Must contain a capital letter");
			}
			
    	
    }
    public void checkLoginCredentials(String username, String password,List<UserEntity> usersList) {
    	boolean usernameCheck=false;
    	boolean passwordCheck=false;
    	for (UserEntity userEntity : usersList) {
			if(userEntity.getUsername().contentEquals(username)) {
				usernameCheck=true;
			}
			if(userEntity.getPassword().contentEquals(password)) {
				passwordCheck=true;
			}
		}
    	if(!usernameCheck) {
    		throw new ResourceNotFoundException("Username do not match");
    	}
    	if(!passwordCheck) {
    		throw new ResourceNotFoundException("Wrong password");
    	}
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
