package com.expense.reimbursementsystem.entity;

import javax.persistence.*;

@Entity
@Table(name = "employee")

public class EmployeeEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "employee_id")
	private int employeeId;

	@Column(name = "manager_id")
	private int managerId;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	@Column(name = "email")
	private String email;

	@Column(name = "user_name")
	private String userName;

	@Column(name = "password")
	private String password;

	@Column(name = "manager_type")
	private boolean managerType;

	public EmployeeEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

		
	
	public EmployeeEntity(int managerId, String firstName, String lastName, String email, String userName,
			String password, boolean managerType) {
		super();
		this.managerId = managerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.userName = userName;
		this.password = password;
		this.managerType = managerType;
	}

	
	public EmployeeEntity(int employeeId, int managerId, String firstName, String lastName, String email,
			String userName, String password, boolean managerType) {
		super();
		this.employeeId = employeeId;
		this.managerId = managerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.userName = userName;
		this.password = password;
		this.managerType = managerType;
	}

	public int getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}

	public int getManagerId() {
		return managerId;
	}

	public void setManagerId(int managerId) {
		this.managerId = managerId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isManagerType() {
		return managerType;
	}

	public void setManagerType(boolean managerType) {
		this.managerType = managerType;
	}

	@Override
	public String toString() {
		return "EmployeeEntity [employeeId=" + employeeId + ", managerId=" + managerId + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", email=" + email + ", userName=" + userName + ", password=" + password
				+ ", managerType=" + managerType + "]";
	}

}
