package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.AdminPackage;
import com.example.demo.services.AdminPackageService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class AdminPackageController {
	@Autowired
	AdminPackageService aservice;
	
	@PostMapping("/addpack")
	public AdminPackage save(@RequestBody AdminPackage a)
	{
		System.out.println(a);
		return aservice.save(a);
	}
}
