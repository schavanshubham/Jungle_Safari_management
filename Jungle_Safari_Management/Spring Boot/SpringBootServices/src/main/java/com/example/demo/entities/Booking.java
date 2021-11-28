package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
@Table(name="booking")
public class Booking 
{

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		int b_id;
		@ManyToOne(cascade = CascadeType.ALL)
		@JoinColumn(name="u_id")
		User u_id;
		@ManyToOne(cascade = CascadeType.ALL)
		@JoinColumn(name="pkg_id")
		Package_Info pkg_id;
		@ManyToOne(cascade = CascadeType.ALL)
		@JoinColumn(name="time_slot_id")
		Timeslot time_slot_id;
		@Column
		Date visit_date;
		@Column
		int no_of_adults;
		@Column
		int no_of_child;
		
		public Booking() {
			super();
		}
		public Booking(User u,Package_Info p, Timeslot t, Date visit_date, int no_of_adults, int no_of_child) {
			super();
			this.u_id=u;
			this.pkg_id=p;
			this.time_slot_id=t;
			this.visit_date = visit_date;
			this.no_of_adults = no_of_adults;
			this.no_of_child = no_of_child;
			
		}
		public Booking(int b_id, User u_id, Timeslot time_slot_id, Date visit_date, int no_of_adults, int no_of_child) {
			super();
			this.b_id = b_id;
			this.u_id = u_id;
			this.time_slot_id = time_slot_id;
			this.visit_date = visit_date;
			this.no_of_adults = no_of_adults;
			this.no_of_child = no_of_child;
		}
		
		public int getB_id() {
			return b_id;
		}
		public void setB_id(int b_id) {
			this.b_id = b_id;
		}
		public User getU_id() {
			return u_id;
		}
		public void setU_id(User u_id) {
			this.u_id = u_id;
		}
		public Timeslot getTime_slot_id() {
			return time_slot_id;
		}
		public void setTime_slot_id(Timeslot time_slot_id) {
			this.time_slot_id = time_slot_id;
		}
		 @JsonFormat(pattern="yyyy-MM-dd")
		public Date getVisit_date() {
			return visit_date;
		}
		public void setVisit_date(Date visit_date) {
			this.visit_date = visit_date;
		}
		public int getNo_of_adults() {
			return no_of_adults;
		}
		public void setNo_of_adults(int no_of_adults) {
			this.no_of_adults = no_of_adults;
		}
		public int getNo_of_child() {
			return no_of_child;
		}
		public void setNo_of_child(int no_of_child) {
			this.no_of_child = no_of_child;
		}
		@Override
		public String toString() {
			return "Booking [b_id=" + b_id + ", u_id=" + u_id + ", time_slot_id=" + time_slot_id + ", visit_date="
					+ visit_date + ", no_of_adults=" + no_of_adults + ", no_of_child=" + no_of_child + "]";
		}
		
		
}
