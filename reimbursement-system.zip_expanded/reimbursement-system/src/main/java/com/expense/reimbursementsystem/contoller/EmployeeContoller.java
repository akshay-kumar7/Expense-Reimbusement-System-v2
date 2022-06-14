package com.expense.reimbursementsystem.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expense.reimbursementsystem.exception.ApplicationException;
import com.expense.reimbursementsystem.pojo.EmployeePojo;
import com.expense.reimbursementsystem.service.EmployeeService;

@CrossOrigin
@RestController
@RequestMapping("api")
public class EmployeeContoller {

	@Autowired
	EmployeeService employeeService;

	// http://localhost:5555/api/employee
	@GetMapping("employee")
	public List<EmployeePojo> getAllEmployees() throws ApplicationException {
		return employeeService.getAllEmployees();
	}

	// http://localhost:5555/api/employee
	@PostMapping("employee")
	public EmployeePojo register(@RequestBody EmployeePojo employeePojo) throws ApplicationException {

		return employeeService.register(employeePojo);

	}

}