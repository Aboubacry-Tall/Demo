package com.example.springDemo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springDemo.models.User;


public interface UserRepository extends JpaRepository<User,Long>{
}