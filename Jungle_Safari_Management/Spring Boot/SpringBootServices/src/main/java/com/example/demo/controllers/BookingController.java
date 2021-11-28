package com.example.demo.controllers;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Booking;
import com.example.demo.entities.BookingInfo;
import com.example.demo.entities.Package_Info;
import com.example.demo.entities.Timeslot;
import com.example.demo.entities.User;
import com.example.demo.repositories.BookingRepository;
import com.example.demo.services.BookingService;
import com.example.demo.services.Package_InfoService;
import com.example.demo.services.TimeslotService;
import com.example.demo.services.UserService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class BookingController {

@Autowired
	BookingService bservice;
@Autowired
	UserService uservice;
@Autowired
	TimeslotService tsservice;
@Autowired
	Package_InfoService pservice;
	
	
	
	/*@PostMapping("/regsaved")
	public Booking save(@RequestBody Booking b)
	{
		System.out.println(b);
		return bservice.save(b);
		*/
	

	@PostMapping("/bookingsave")
    //public Booking save(@RequestParam("user")int u_id, @RequestParam("pakage_info")int pkg_id ,@RequestParam("timeslot")int time_slot_id, @RequestParam("visit_date")Date visit_date,@RequestParam("no_of_adults") int no_of_adults, @RequestParam("no_of_child")int no_of_child)
	public Booking save(@RequestBody BookingInfo binfo)
    {
		System.out.println(binfo.getU_id()+":"+binfo.getPkg_id());
		User u = uservice.getUser(binfo.getU_id());
		System.out.println(u);
		Package_Info p = pservice.getPackage(binfo.getPkg_id());
		Timeslot t = tsservice.getTimeslot(binfo.getTimslot_id());
		Booking b = new Booking(u,p,t,binfo.getVdate(),binfo.getAdults(),binfo.getChildren());
		return bservice.save(b);
		

		/*User u = uservice.getUser(u_id);
		Package_Info p = pservice.getPackage(pkg_id);
		Timeslot t = tsservice.getTimeslot(time_slot_id);
		Booking b = new Booking(u,p,t,visit_date,no_of_adults,no_of_child);
		return bservice.save(b);
		//return b;*/
	
    }
    

}
	