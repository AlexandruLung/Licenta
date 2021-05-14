package com.backend.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.backend.model.UserEntity;

public interface LoginRepository extends JpaRepository<UserEntity,Integer>{

}
