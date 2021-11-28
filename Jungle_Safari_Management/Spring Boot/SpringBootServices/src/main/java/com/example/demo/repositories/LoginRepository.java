package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {

	@Query("select l.u_type,l.u_id from Login l where l.email = :email and l.password = :password")
	public List<Object[]> checkLogin(String email,String password);
	
}
