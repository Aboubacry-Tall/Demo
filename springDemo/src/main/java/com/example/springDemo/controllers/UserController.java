package com.example.springDemo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springDemo.models.User;
import com.example.springDemo.repositories.UserRepository;

@RestController
@RequestMapping("/demo/")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	@Autowired
	private UserRepository userRepo;
	
	
	@GetMapping("users")
	public List<User> getAllTests() {
		return userRepo.findAll();
	}

	@PostMapping("users/delete")
	public void deleteUsersByIds(@RequestBody int[] ids) {
		for(int i=1; i<ids.length; i++)
		userRepo.deleteById((long) (long) ids[i]);
	}
}
