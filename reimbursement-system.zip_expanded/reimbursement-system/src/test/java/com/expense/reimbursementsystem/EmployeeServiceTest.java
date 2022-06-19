package com.expense.reimbursementsystem;

import static org.junit.jupiter.api.Assertions.assertTrue;

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

}
