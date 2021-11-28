package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="timeslot")
public class Timeslot {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int time_slot_id;
	@Column
	String time_slot_name;
	public Timeslot() {
		super();
	}
	public Timeslot(int time_slot_id, String time_slot_name) {
		super();
		this.time_slot_id = time_slot_id;
		this.time_slot_name = time_slot_name;
	}
	public int getTime_slot_id() {
		return time_slot_id;
	}
	public void setTime_slot_id(int time_slot_id) {
		this.time_slot_id = time_slot_id;
	}
	public String getTime_slot_name() {
		return time_slot_name;
	}
	public void setTime_slot_name(String time_slot_name) {
		this.time_slot_name = time_slot_name;
	}
	@Override
	public String toString() {
		return "Timeslot [time_slot_id=" + time_slot_id + ", time_slot_name=" + time_slot_name + "]";
	}
	
	

	
}
