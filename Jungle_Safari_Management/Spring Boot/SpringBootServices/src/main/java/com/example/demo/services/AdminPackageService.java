package com.example.demo.services;

import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.AdminPackage;

import com.example.demo.repositories.AdminPackageRepository;

@Service
public class AdminPackageService {
	@Autowired
	AdminPackageRepository arepo;
	public AdminPackage save(AdminPackage a)
	{
		return arepo.save(a);
	}
	public AdminPackage getAdminPackage(int pkg_id) {
		Optional<AdminPackage> ot = arepo.findById(pkg_id);
		AdminPackage a = null;
		try
		{
			a = ot.get();
		}
		catch(NoSuchElementException e)
		{
			a = null;
		}
		return null;
		
	}

}
