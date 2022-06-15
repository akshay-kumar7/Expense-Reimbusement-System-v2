package com.expense.reimbursementsystem.contoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expense.reimbursementsystem.service.ReimbursementService;

@CrossOrigin
@RestController
@RequestMapping("api")
public class ReimbursementContoller {
	
	@Autowired
	ReimbursementService reimbursementService;

//	@GetMapping("reimbusrement/{eID}")
//	public List<ReimbursementPojo> employeeRequestPojo {
//		return employeeRequestPojo;
//	}
	
}
