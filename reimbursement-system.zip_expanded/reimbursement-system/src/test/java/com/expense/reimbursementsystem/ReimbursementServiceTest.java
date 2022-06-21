package com.expense.reimbursementsystem;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.any;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.expense.reimbursementsystem.dao.ReimbursementDao;
import com.expense.reimbursementsystem.entity.ReimbursementEntity;
import com.expense.reimbursementsystem.exception.ApplicationException;
import com.expense.reimbursementsystem.exception.EmployeeNotFoundException;
import com.expense.reimbursementsystem.pojo.ReimbursementPojo;
import com.expense.reimbursementsystem.service.ReimbursementServiceImpl;

@ExtendWith(MockitoExtension.class)
public class ReimbursementServiceTest {

	@Mock
	ReimbursementDao reimbursementDao;
	
	@InjectMocks
	ReimbursementServiceImpl reimbursementService;
	
	private ReimbursementPojo expectedReimbursementPojo;
	private ReimbursementEntity dummyReimbursementEntity;
	
	@BeforeEach
	public void setup() {
		expectedReimbursementPojo = new ReimbursementPojo(111, 222, 333, "Pending", 444, "Meal Expense");
		dummyReimbursementEntity = new ReimbursementEntity(111, 222, 333, "Pending", 444, "Meal Expense");		
	}
	
	@DisplayName("JUnit Test for getReimbursementsByStatus() method")
	@Test
	public void getReimbursementsByStatus() throws ApplicationException {
		ReimbursementEntity dummyReimbursementEntity2 = new ReimbursementEntity(1, 2, 3, "Approved", 4, "Travel Expense");
		
		when(reimbursementDao.findReimbursementByStatus(dummyReimbursementEntity.
				getStatus())).thenReturn(List.of(dummyReimbursementEntity, dummyReimbursementEntity2));
		
		List<ReimbursementPojo> actualAllReimbursementList = reimbursementService.getReimbursementsByStatus(expectedReimbursementPojo.getStatus());
		
		assertNotNull(actualAllReimbursementList);
		assertEquals(2, actualAllReimbursementList.size()); 
		assertEquals(expectedReimbursementPojo.getStatus(), actualAllReimbursementList.get(0).getStatus());
	}
	
	@DisplayName("JUnit Test for viewEmployeeRequests() method")
	@Test
	public void viewEmployeeRequests() throws ApplicationException, EmployeeNotFoundException {
		when(reimbursementDao.findReimbursementByEmployeeId(dummyReimbursementEntity.
				getEmployeeId())).thenReturn(List.of(dummyReimbursementEntity));
		
		List<ReimbursementPojo> actualAllReimbursementList = reimbursementService.viewEmployeeRequests(expectedReimbursementPojo.getEmployeeId());
		
		assertNotNull(actualAllReimbursementList);
		assertEquals(1, actualAllReimbursementList.size()); 
		assertEquals(expectedReimbursementPojo.getEmployeeId(), actualAllReimbursementList.get(0).getEmployeeId());
	}
	
	@DisplayName("JUnit Test for submitInfo() method")
	@Test
	public void submitInfo() throws ApplicationException {
		
		when(reimbursementDao.save(any(ReimbursementEntity.class))).thenReturn(dummyReimbursementEntity);
		
		ReimbursementPojo sendReimbursementPojo = new ReimbursementPojo(111, 222, 333, "Pending", 444, "Meal Expense");
		
		ReimbursementPojo actualReimbursementPojo = reimbursementService.submitInfo(sendReimbursementPojo);
		
		assertEquals(expectedReimbursementPojo, actualReimbursementPojo);
		assertEquals(expectedReimbursementPojo.getAmount(), actualReimbursementPojo.getAmount());
	}
	
	@DisplayName("JUnit Test for updateReimbursement() method")
	@Test
	public void updateReimbursement() throws ApplicationException {
		when(reimbursementDao.save(any(ReimbursementEntity.class))).thenReturn(dummyReimbursementEntity);
		
		ReimbursementPojo sendReimbursementPojo = new ReimbursementPojo(111, 222, 333, "Pending", 444, "Meal Expense");
		ReimbursementPojo actualReimbursementPojo = reimbursementService.updateReimbursement(sendReimbursementPojo);
		
		assertEquals(expectedReimbursementPojo, actualReimbursementPojo);
		assertEquals(expectedReimbursementPojo.getReason(), actualReimbursementPojo.getReason());
	}
	

	
}
