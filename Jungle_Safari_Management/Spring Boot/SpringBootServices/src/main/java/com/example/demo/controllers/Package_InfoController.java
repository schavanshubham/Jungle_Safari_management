package com.example.demo.controllers;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Package_Info;
import com.example.demo.services.Package_InfoService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class Package_InfoController {
	@Autowired
	Package_InfoService pservice;
	@GetMapping("/packageinfo")
	/*public Package_Info save(@RequestParam("pkg_id")int pkg_id,@RequestParam("pkg_name")String pkg_name,@RequestParam("validity_date")Date validity_date,@RequestParam("pkg_price_frgn")int pkg_price_frgn,@RequestParam("pkg_price_ind")int pkg_price_ind,@RequestParam("max_people")int max_people,@RequestParam("description")String description)
	{
		Package_Info p= new Package_Info(pkg_id,pkg_name,validity_date,pkg_price_frgn,pkg_price_ind,max_people,description);
		
		return pservice.save(p);
	}*/
	public List<Package_Info> getPackage_Info()
	{
		return pservice.getAll();	}
}
