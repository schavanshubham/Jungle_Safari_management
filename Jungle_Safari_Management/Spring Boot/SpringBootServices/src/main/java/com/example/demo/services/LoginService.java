package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.User;
import com.example.demo.repositories.LoginRepository;
import com.example.demo.repositories.UserRepository;

@Service
public class LoginService {
	@Autowired
	LoginRepository lrepo;
	@Autowired
	UserRepository urepo;
public Object checkLogin(String email,String password)
{
	List<Object[]> l= lrepo.checkLogin(email, password);
	if(l.size()==1)
	{
	System.out.println(l.get(0)[0]+" : "+l.get(0)[1]);
	User u=null;
	if((l.get(0) [0].equals("user"))||(l.get(0) [0].equals("admin")) )
	{
		Optional<User> ou = urepo.findById((int)l.get(0)[1]);
		try
		{
			u = ou.get();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
	return u;	
	}
	else
	{
		return null;
	}
}
}