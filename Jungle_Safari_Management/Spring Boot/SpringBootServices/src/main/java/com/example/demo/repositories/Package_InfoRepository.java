package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Package_Info;
@Repository
public interface Package_InfoRepository extends JpaRepository<Package_Info, Integer>
{

}
