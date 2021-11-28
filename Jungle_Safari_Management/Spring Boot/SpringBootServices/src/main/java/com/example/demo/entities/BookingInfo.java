package com.example.demo.entities;

import java.sql.Date;

public class BookingInfo {
	int u_id;
	int pkg_id;
	int timslot_id;
	Date vdate;
	int adults;
	int children;
	public BookingInfo() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BookingInfo(int u_id, int pkg_id, int timslot_id, Date vdate, int adults, int children) {
		super();
		this.u_id = u_id;
		this.pkg_id = pkg_id;
		this.timslot_id = timslot_id;
		this.vdate = vdate;
		this.adults = adults;
		this.children = children;
	}
	public int getU_id() {
		return u_id;
	}
	public void setU_id(int u_id) {
		this.u_id = u_id;
	}
	public int getPkg_id() {
		return pkg_id;
	}
	public void setPkg_id(int pkg_id) {
		this.pkg_id = pkg_id;
	}
	public int getTimslot_id() {
		return timslot_id;
	}
	public void setTimslot_id(int timslot_id) {
		this.timslot_id = timslot_id;
	}
	public Date getVdate() {
		return vdate;
	}
	public void setVdate(Date vdate) {
		this.vdate = vdate;
	}
	public int getAdults() {
		return adults;
	}
	public void setAdults(int adults) {
		this.adults = adults;
	}
	public int getChildren() {
		return children;
	}
	public void setChildren(int children) {
		this.children = children;
	}
	@Override
	public String toString() {
		return "BookingInfo [u_id=" + u_id + ", pkg_id=" + pkg_id + ", timslot_id=" + timslot_id + ", vdate=" + vdate
				+ ", adults=" + adults + ", children=" + children + "]";
	}
	
	
	
	
	

}
