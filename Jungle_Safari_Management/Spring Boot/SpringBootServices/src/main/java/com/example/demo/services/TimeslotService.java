package com.example.demo.services;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Package_Info;
import com.example.demo.entities.Timeslot;
import com.example.demo.repositories.TimeslotRepository;

@Service
public class TimeslotService {

	@Autowired
	TimeslotRepository tsrepo;
	/*public Timeslot save(Timeslot ts)
	{
		return tsrepo.save(ts);
	}*/
	
	public Timeslot getTimeslot(int time_slot_id) {
		// TODO Auto-generated method stub
		Optional<Timeslot> ot = tsrepo.findById(time_slot_id);
		Timeslot t = null;
		try
		{
			t = ot.get();
		}
		catch(NoSuchElementException e)
		{
			t = null;
		}
		return t;
	}
	public List<Timeslot> getAll()
	{
		return tsrepo.findAll();
	}

}
