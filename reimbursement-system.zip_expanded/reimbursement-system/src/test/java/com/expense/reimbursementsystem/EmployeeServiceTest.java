package com.expense.reimbursementsystem;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.doReturn;

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
import com.expense.reimbursementsystem.exception.ApplicationException;
import com.expense.reimbursementsystem.service.EmployeeServiceImpl;

@ExtendWith (MockitoExtension.class)
public class EmployeeServiceTest {
	@Mock
	private EmployeeDao daoMock;
	
	@InjectMocks
	private EmployeeServiceImpl EmpService;
	
	@Test
	
	public void testlogin() throws ApplicationException {
		
//		EmployeeEntity sendEntity = 
//		
//		when(daoMock.get)
//		assertTrue(true);
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
		assertEquals(expectedEmployeePojo, actualEmployeePojo);
	}

	@DisplayName("JUnit Test for updateInfo() method")
//	@MockitoSettings(strictness = Strictness.WARN)
	@Test
	public void testUpdateInfo() throws ApplicationException {
		
		when(employeeDao.save(dummyEmployeeEntity)).thenReturn(dummyEmployeeEntity);
//		doReturn(dummyEmployeeEntity).when(employeeDao.save(dummyEmployeeEntity));
		doReturn(dummyEmployeeEntity).when(employeeDao).save(dummyEmployeeEntity);

		
		// when(spy.get(0)).thenReturn("foo");
		// doReturn("foo").when(spy).get(0);
		
		
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
		
	}
	
	@DisplayName("JUnit Test for register() method")
//	@MockitoSettings(strictness = Strictness.WARN)
	@Test
	public void testRegister() throws ApplicationException {
		EmployeeEntity dummyRegisterEmployeeEntity = new EmployeeEntity(444, 111, "John", "Doe", 
				"jdoe@gmail.com", "jdoe", "jd123", true);
		
		when(employeeDao.saveAndFlush(dummyRegisterEmployeeEntity)).thenReturn(dummyRegisterEmployeeEntity);
		
		EmployeePojo sendEmployeePojo = new EmployeePojo(444, 111, "John", "Doe", 
				"jdoe@gmail.com", "jdoe", "jd123", true);
		EmployeePojo actualEmployeePojo = employeeService.register(sendEmployeePojo);
		
		assertEquals(444, actualEmployeePojo.getEmployeeId());
	}
	


}
