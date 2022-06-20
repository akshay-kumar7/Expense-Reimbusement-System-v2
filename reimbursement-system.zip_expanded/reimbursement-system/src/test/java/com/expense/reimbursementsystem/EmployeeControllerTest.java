package com.expense.reimbursementsystem;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.expense.reimbursementsystem.contoller.EmployeeController;
import com.expense.reimbursementsystem.dao.EmployeeDao;
import com.expense.reimbursementsystem.entity.EmployeeEntity;
import com.expense.reimbursementsystem.pojo.EmployeePojo;

@ExtendWith (MockitoExtension.class)
public class EmployeeControllerTest {
	
	@InjectMocks
	EmployeeController employeeController;
	
	@Mock
	EmployeeDao employeeDao;
	
	private EmployeePojo expectedEmployeePojo;
	private EmployeeEntity dummyEmployeeEntity;
	
	@BeforeEach
	public void setup() {
		expectedEmployeePojo = new EmployeePojo(444, 111, "John", "Doe", 
				"jdoe@gmail.com", "jdoe", "jd123", true);
		dummyEmployeeEntity = new EmployeeEntity(444, 111, "John", "Doe", 
				"jdoe@gmail.com", "jdoe", "jd123", true);
	}
	
	@DisplayName("JUnit Test for register() method")
	@Test
	public void testRegister() {
		
	}
	
	@DisplayName("JUnit Test for login() method")
	@Test
	public void testLogin() {
		
	}
	
	@DisplayName("JUnit Test for updateInfo() method")
	@Test
	public void testUpdateInfo() {
		
	}
	
	
}
