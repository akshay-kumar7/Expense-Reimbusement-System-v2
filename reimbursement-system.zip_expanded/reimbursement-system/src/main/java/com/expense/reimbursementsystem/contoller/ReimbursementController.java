package com.expense.reimbursementsystem.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expense.reimbursementsystem.exception.ApplicationException;
import com.expense.reimbursementsystem.pojo.ReimbursementPojo;
import com.expense.reimbursementsystem.service.ReimbursementService;

@CrossOrigin // to enable cors
@RestController
@RequestMapping("reimbursement")
public class ReimbursementController {
	
	@Autowired
	ReimbursementService reimbursementService;
	
	//http://localhost:7474/reimbursement/status/pending
	//or
	//http://localhost:7474/reimbursement/status/approve
	@GetMapping("status/{status}")
	public List<ReimbursementPojo> getReimbursementsByStatus(@PathVariable("status") String status) throws ApplicationException{
		return reimbursementService.getReimbursementsByStatus(status);
	}
	
	@PutMapping("changestatus")
	public ReimbursementPojo updateReimbursement(@RequestBody ReimbursementPojo reimbursementPojo) throws ApplicationException{
		return reimbursementService.updateReimbursement(reimbursementPojo);
	}

}
