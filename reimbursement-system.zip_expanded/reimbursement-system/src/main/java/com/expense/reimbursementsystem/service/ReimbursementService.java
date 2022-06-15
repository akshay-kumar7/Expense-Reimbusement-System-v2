package com.expense.reimbursementsystem.service;

import com.expense.reimbursementsystem.exception.ApplicationException;
import com.expense.reimbursementsystem.pojo.ReimbursementPojo;

public interface ReimbursementService {
	
	ReimbursementPojo submitInfo(ReimbursementPojo reimbursementPojo) throws ApplicationException;

}
