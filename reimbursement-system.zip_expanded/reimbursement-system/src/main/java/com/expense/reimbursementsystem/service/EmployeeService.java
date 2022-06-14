package com.expense.reimbursementsystem.service;

import com.expense.reimbursementsystem.exception.ApplicationException;
import com.expense.reimbursementsystem.pojo.EmployeePojo;
import java.util.List;

public interface EmployeeService {
	
	EmployeePojo login(EmployeePojo employeePojo) throws ApplicationException;

	EmployeePojo viewInfo(int employeeId) throws ApplicationException;

	EmployeePojo updateInfo(EmployeePojo employeePojo) throws ApplicationException;

	List<EmployeePojo> getAllEmployees() throws ApplicationException;
	
	EmployeePojo register(EmployeePojo employeePojo) throws ApplicationException;

}