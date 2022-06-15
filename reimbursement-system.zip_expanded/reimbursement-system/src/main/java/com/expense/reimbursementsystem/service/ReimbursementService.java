package com.expense.reimbursementsystem.service;

import java.util.List;

import com.expense.reimbursementsystem.exception.ApplicationException;
import com.expense.reimbursementsystem.pojo.ReimbursementPojo;

public interface ReimbursementService {

	ReimbursementPojo submitRequest(ReimbursementPojo reimbursementPojo) throws ApplicationException;

	List<ReimbursementPojo> viewEmployeeRequests(int employeeId) throws ApplicationException;

	List<ReimbursementPojo> managerViewEmployeeRequests(int employeeId) throws ApplicationException;

	List<ReimbursementPojo> viewAllRequests() throws ApplicationException;

	ReimbursementPojo changeRequestStatus(ReimbursementPojo reimbursementPojo) throws ApplicationException;

	List<ReimbursementPojo> viewAllResolvedRequests() throws ApplicationException;
}
