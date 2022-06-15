package com.expense.reimbursementsystem.service;

import java.util.List;

import com.expense.reimbursementsystem.exception.ApplicationException;
import com.expense.reimbursementsystem.pojo.ReimbursementPojo;

public interface ReimbursementService {
	
	List<ReimbursementPojo> getReimbursementsByStatus(String status) throws ApplicationException;

}
