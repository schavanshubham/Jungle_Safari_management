package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Package_Info;
import com.example.demo.entities.Timeslot;
import com.example.demo.services.TimeslotService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class TimeslotController
{
	@Autowired
	TimeslotService tsservice;
	@GetMapping("/timeslot")
	/*public Timeslot save(@RequestParam("time_slot_id")int time_slot_id,@RequestParam("time_slot_name")String time_slot_name)
	{
		Timeslot ts= new Timeslot(time_slot_id,time_slot_name);
		return tsservice.save(ts);
	}*/
	public List<Timeslot> getPackage_Info()
	{
		return tsservice.getAll();	}

}
