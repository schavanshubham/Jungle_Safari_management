package com.example.demo.controllers;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.User;
import com.example.demo.services.UserService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class UserController {
	@Autowired
	UserService uservice;
	
	@PostMapping("/saved")
	public User save(@RequestBody User u)
	{
		System.out.println(u);
		return uservice.save(u);
	}
	
	@GetMapping("/getuser")
	public User getUser(@RequestParam("u_id")int u_id)
	{
		return uservice.getUser(u_id);
	}
	/*public List<User> getUser()
	{
		return uservice.getAll();	}*/
}



