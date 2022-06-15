package com.expense.reimbursementsystem.service;

import java.util.List;
import com.expense.reimbursementsystem.exception.ApplicationException;
import com.expense.reimbursementsystem.pojo.ReimbursementPojo;
<<<<<<< HEAD
import com.expense.reimbursementsystem.exception.ApplicationException;
import com.expense.reimbursementsystem.pojo.ReimbursementPojo;
import com.expense.reimbursementsystem.exception.ApplicationException;
import com.expense.reimbursementsystem.pojo.ReimbursementPojo;
=======
>>>>>>> 5d419ee3 (Exception GLobal)

public interface ReimbursementService {

	ReimbursementPojo submitRequest(ReimbursementPojo reimbursementPojo) throws ApplicationException;

	List<ReimbursementPojo> viewEmployeeRequests(int employeeId) throws ApplicationException;

	List<ReimbursementPojo> managerViewEmployeeRequests(int employeeId) throws ApplicationException;

	List<ReimbursementPojo> viewAllRequests() throws ApplicationException;

	ReimbursementPojo changeRequestStatus(ReimbursementPojo reimbursementPojo) throws ApplicationException;

	List<ReimbursementPojo> viewAllResolvedRequests() throws ApplicationException;

	ReimbursementPojo submitInfo(ReimbursementPojo reimbursementPojo) throws ApplicationException;
	
	List<ReimbursementPojo> getReimbursementsByStatus(String status) throws ApplicationException;
<<<<<<< HEAD

	ReimbursementPojo updateReimbursement(ReimbursementPojo reimbursementPojo) throws ApplicationException;

=======
	
	ReimbursementPojo updateReimbursement(ReimbursementPojo reimbursementPojo) throws ApplicationException;
	
>>>>>>> 5d419ee3 (Exception GLobal)
}
