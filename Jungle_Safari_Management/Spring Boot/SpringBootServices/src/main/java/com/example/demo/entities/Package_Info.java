package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="package_info")
public class Package_Info {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int pkg_id;
	@Column
	String pkg_name;
	@Column
	Date validity_date;
	@Column
	int pkg_price_frgn;
	@Column
	int pkg_price_ind;
	@Column
	int max_people;
	@Column
	String description;
	public Package_Info() {
		super();
	}
	public Package_Info(int pkg_id, String pkg_name, Date validity_date, int pkg_price_frgn, int pkg_price_ind,
			int max_people, String description) {
		super();
		this.pkg_id = pkg_id;
		this.pkg_name = pkg_name;
		this.validity_date = validity_date;
		this.pkg_price_frgn = pkg_price_frgn;
		this.pkg_price_ind = pkg_price_ind;
		this.max_people = max_people;
		this.description = description;
	}
	public int getPkg_id() {
		return pkg_id;
	}
	public void setPkg_id(int pkg_id) {
		this.pkg_id = pkg_id;
	}
	public String getPkg_name() {
		return pkg_name;
	}
	public void setPkg_name(String pkg_name) {
		this.pkg_name = pkg_name;
	}
	 @JsonFormat(pattern="yyyy-MM-dd")
	public Date getValidity_date() {
		return validity_date;
	}
	public void setValidity_date(Date validity_date) {
		this.validity_date = validity_date;
	}
	public int getPkg_price_frgn() {
		return pkg_price_frgn;
	}
	public void setPkg_price_frgn(int pkg_price_frgn) {
		this.pkg_price_frgn = pkg_price_frgn;
	}
	public int getPkg_price_ind() {
		return pkg_price_ind;
	}
	public void setPkg_price_ind(int pkg_price_ind) {
		this.pkg_price_ind = pkg_price_ind;
	}
	public int getMax_people() {
		return max_people;
	}
	public void setMax_people(int max_people) {
		this.max_people = max_people;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	@Override
	public String toString() {
		return "Package_Info [pkg_id=" + pkg_id + ", pkg_name=" + pkg_name + ", validity_date=" + validity_date
				+ ", pkg_price_frgn=" + pkg_price_frgn + ", pkg_price_ind=" + pkg_price_ind + ", max_people="
				+ max_people + ", description=" + description + "]";
	}
	
	
}
