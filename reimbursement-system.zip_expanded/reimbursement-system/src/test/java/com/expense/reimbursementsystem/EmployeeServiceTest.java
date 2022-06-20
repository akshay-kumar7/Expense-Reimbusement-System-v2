package com.expense.reimbursementsystem;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.any;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.expense.reimbursementsystem.dao.EmployeeDao;
import com.expense.reimbursementsystem.entity.EmployeeEntity;
import com.expense.reimbursementsystem.exception.ApplicationException;
import com.expense.reimbursementsystem.exception.EmployeeNotFoundException;
import com.expense.reimbursementsystem.exception.EmptyEmployeeList;
import com.expense.reimbursementsystem.exception.LoginFailedException;
import com.expense.reimbursementsystem.pojo.EmployeePojo;
import com.expense.reimbursementsystem.service.EmployeeServiceImpl;

@ExtendWith (MockitoExtension.class)
public class EmployeeServiceTest {
	
	@Mock
	EmployeeDao employeeDao;
	
	@InjectMocks
	EmployeeServiceImpl employeeService;

	private EmployeePojo expectedEmployeePojo;
	private EmployeeEntity dummyEmployeeEntity;
	
	
	@BeforeEach
	public void setup() {
		expectedEmployeePojo = new EmployeePojo(444, 111, "John", "Doe", 
				"jdoe@gmail.com", "jdoe", "jd123", true);
		dummyEmployeeEntity = new EmployeeEntity(444, 111, "John", "Doe", 
				"jdoe@gmail.com", "jdoe", "jd123", true);
	}
	 

	@DisplayName("JUnit Test for login() method")
	@Test
	public void testLogin() throws ApplicationException, LoginFailedException {
		when(employeeDao.findByEmailAndPassword(dummyEmployeeEntity.getEmail(), 
				dummyEmployeeEntity.getPassword())).thenReturn(List.of(dummyEmployeeEntity));
		
		EmployeePojo actualEmployeePojo = employeeService.login(expectedEmployeePojo);
		
		assertEquals("John", actualEmployeePojo.getFirstName());
	}

	@DisplayName("JUnit Test for viewInfo() method")
	@Test
	public void testViewInfo() throws ApplicationException, EmployeeNotFoundException {
		when(employeeDao.findById(444)).thenReturn(Optional.of(dummyEmployeeEntity));
		
		EmployeePojo actualEmployeePojo = employeeService.viewInfo(444);
		assertEquals(444, actualEmployeePojo.getEmployeeId());
	}

	@DisplayName("JUnit Test for updateInfo() method")
	@Test
	public void testUpdateInfo() throws ApplicationException {
		
		when(employeeDao.save(any(EmployeeEntity.class))).thenReturn(dummyEmployeeEntity);		
		
		EmployeePojo sendEmployeePojo = new EmployeePojo(444, 111, "John", "Doe", 
				"jdoe@gmail.com", "jdoe", "jd123", true);
		EmployeePojo actualEmployeePojo = employeeService.updateInfo(sendEmployeePojo);
		
		assertEquals(expectedEmployeePojo, actualEmployeePojo);
	}

	@DisplayName("JUnit Test for getAllEmployees() method")
	@Test
	public void testGetAllEmployees() throws ApplicationException, EmptyEmployeeList {
		when(employeeDao.findAll()).thenReturn(List.of(dummyEmployeeEntity, dummyEmployeeEntity, dummyEmployeeEntity));
		
		List<EmployeePojo> actualAllEmployeePojoList = employeeService.getAllEmployees();
		
		assertNotNull(actualAllEmployeePojoList);
		assertEquals(3, actualAllEmployeePojoList.size());
		assertEquals(expectedEmployeePojo.getFirstName(), actualAllEmployeePojoList.get(0).getFirstName());
		
	}
	
	@DisplayName("JUnit Test for register() method")
	@Test
	public void testRegister() throws ApplicationException {
		when(employeeDao.saveAndFlush(any(EmployeeEntity.class))).thenReturn(dummyEmployeeEntity);
		
		EmployeePojo sendEmployeePojo = new EmployeePojo(444, 111, "John", "Doe", 
				"jdoe@gmail.com", "jdoe", "jd123", true);
		EmployeePojo actualEmployeePojo = employeeService.register(sendEmployeePojo);
		
		assertEquals(444, actualEmployeePojo.getEmployeeId());
	}
	


}
