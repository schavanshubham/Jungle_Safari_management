package com.example.demo.services;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Timeslot;
import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;


@Service
public class UserService {
	@Autowired
	UserRepository urepo;
	public User save(User u)
	{
		return urepo.save(u);
	}
	public User getUser(int u_id) {
		Optional<User> ot = urepo.findById(u_id);
		User u = null;
		try
		{
			u = ot.get();
		}
		catch(NoSuchElementException e)
		{
			u = null;
		}
		return u;
		
	}
	public List<User> getAll() {
		// TODO Auto-generated method stub
		return urepo.findAll();
	}
	
}