package com.expense.reimbursementsystem.exception;

public class EmployeeNotFoundException extends Exception {
	
	int employeeId;
	
	public EmployeeNotFoundException(int employeeId) {		
		this.employeeId = employeeId;
	}
	
	@Override
	public String getMessage() {
		return "No Employee found with id: " + employeeId + ". Please try again.";
	}

}
