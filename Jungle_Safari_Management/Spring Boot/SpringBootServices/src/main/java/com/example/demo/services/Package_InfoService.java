package com.example.demo.services;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Package_Info;
import com.example.demo.repositories.Package_InfoRepository;
@Service
public class Package_InfoService {
	@Autowired
	Package_InfoRepository prepo;
	/*public Package_Info save(Package_Info p)
	{
		return prepo.save(p);
	}*/
	public Package_Info getPackage(int pkg_id) {
		Optional<Package_Info> ot = prepo.findById(pkg_id);
		Package_Info t = null;
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
	public List<Package_Info> getAll()
	{
		return prepo.findAll();
	}
	

}
