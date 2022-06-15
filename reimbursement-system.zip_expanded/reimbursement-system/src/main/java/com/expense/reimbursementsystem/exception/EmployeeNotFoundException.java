package com.expense.reimbursementsystem.exception;

public class EmployeeNotFoundException extends Exception {
	int employeeId;
	
	public EmployeeNotFoundException(int employeeId) {
		
		this.employeeId = employeeId;
	}
	
	@Override
	public String getMessage() {
		
		//return "Employee Not Found";
	
		return "Employee with id: " + employeeId + "";
		return null;
	}

}
