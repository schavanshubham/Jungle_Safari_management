package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")

public class User
{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int u_id;
	@Column
	String fname;
	@Column
	String lname;
	

	@Column
	String email;
	@Column
	String password;
	@Column
	String contact_no;
	@Column
	String city;
	@Column
	String gender;
	@Column
	String nationality;
	

	public User() {
		super();
	}


	public User(int u_id, String fname, String lname, String email, String password, String contact_no, String city,
			String gender, String nationality) {
		super();
		this.u_id = u_id;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.password = password;
		this.contact_no = contact_no;
		this.city = city;
		this.gender = gender;
		this.nationality = nationality;
	}
	
	
	public int getU_id() {
		return u_id;
	}


	public void setU_id(int u_id) {
		this.u_id = u_id;
	}


	public String getFname() {
		return fname;
	}


	public void setFname(String fname) {
		this.fname = fname;
	}


	public String getLname() {
		return lname;
	}


	public void setLname(String lname) {
		this.lname = lname;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getContact_no() {
		return contact_no;
	}


	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	

	public String getNationality() {
		return nationality;
	}


	public void setNationality(String nationality) {
		this.nationality = nationality;
	}
	@Override
	public String toString() {
		return "User [u_id=" + u_id + ", fname=" + fname + ", lname=" + lname + ", email=" + email + ", password="
				+ password + ", contact_no=" + contact_no + ", city=" + city + ", gender=" + gender + ", nationality="
				+ nationality + "]";
	}


	





	
}