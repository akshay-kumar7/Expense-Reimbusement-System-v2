package com.expense.reimbursementsystem.exception;

import com.expense.reimbursementsystem.pojo.EmployeePojo;

public class LoginFailedException extends Exception{

	@Override
	public String getMessage() {
		return "Incorrect email or password. Please try again.";
	}

	
}
