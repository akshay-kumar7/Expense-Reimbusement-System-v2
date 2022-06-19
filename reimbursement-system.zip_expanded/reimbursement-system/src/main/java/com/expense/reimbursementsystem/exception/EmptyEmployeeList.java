package com.expense.reimbursementsystem.exception;

public class EmptyEmployeeList extends Exception {

	@Override
	public String getMessage() {
		return "Empty Employee List";
	}
}
