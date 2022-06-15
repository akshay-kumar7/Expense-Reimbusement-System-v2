package com.expense.reimbursementsystem.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expense.reimbursementsystem.dao.EmployeeDao;
import com.expense.reimbursementsystem.entity.EmployeeEntity;
import com.expense.reimbursementsystem.exception.ApplicationException;
import com.expense.reimbursementsystem.pojo.EmployeePojo;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeDao employeeDao; // Tells Spring Framework to automatically create instance

	@Override
	public EmployeePojo login(EmployeePojo employeePojo) throws ApplicationException {
		List<EmployeeEntity> employeeEntityLogin = employeeDao.findByEmailAndPassword(employeePojo.getEmail(),
				employeePojo.getPassword());
		EmployeePojo loginEmployeePojo = null;
		//List<EmployeePojo> loginEmployee = new ArrayList<EmployeePojo>();
		for(EmployeeEntity fetchedEmployeeEntity : employeeEntityLogin) {
			EmployeePojo loginEmployeePojoDetails = new EmployeePojo(fetchedEmployeeEntity.getEmployeeId(),
					fetchedEmployeeEntity.getManagerId(), fetchedEmployeeEntity.getFirstName(),
					fetchedEmployeeEntity.getLastName(), fetchedEmployeeEntity.getEmail(),
					fetchedEmployeeEntity.getPassword(), fetchedEmployeeEntity.getUserName(),
					fetchedEmployeeEntity.isManagerType());
			//loginEmployee.add(loginEmployeePojoDetails);
			loginEmployeePojo = loginEmployeePojoDetails;
		}
		
		
//		if (employeeEntityLogin.isPresent()) {
//			EmployeeEntity loginEmployeeEntity = employeeEntityLogin.get();
//		
//		loginEmployeePojo = new EmployeePojo();
//		BeanUtils.copyProperties(loginEmployeeDetails, loginEmployeePojo);
//		}
		return loginEmployeePojo;
	}
	

	@Override
	public EmployeePojo viewInfo(int employeeId) throws ApplicationException {
		Optional<EmployeeEntity> employeeEntityOpt = employeeDao.findById(employeeId);
		EmployeePojo employeePojo = null;
		if (employeeEntityOpt.isPresent()) {
			EmployeeEntity fetchedEmployeeEntity = employeeEntityOpt.get();
//			employeePojo= new EmployeePojo(fetchedEmployeeEntity.getEmployeeId(),
//					fetchedEmployeeEntity.getManagerId(), fetchedEmployeeEntity.getFirstName(),
//					fetchedEmployeeEntity.getLastName(), fetchedEmployeeEntity.getEmail(),
//					fetchedEmployeeEntity.getPassword(), fetchedEmployeeEntity.getUserName(),
//					fetchedEmployeeEntity.isManagerType());

			employeePojo = new EmployeePojo();
			BeanUtils.copyProperties(fetchedEmployeeEntity, employeePojo);
		}
		return employeePojo;
	}

	@Override
	public EmployeePojo updateInfo(EmployeePojo employeePojo) throws ApplicationException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<EmployeePojo> getAllEmployees() throws ApplicationException {
		List<EmployeeEntity> allEmployeeEntity = employeeDao.findAll();

		List<EmployeePojo> allEmployeePojo = new ArrayList<EmployeePojo>();

		for (EmployeeEntity fetchedEmployeeEntity : allEmployeeEntity) {
			EmployeePojo returnEmployeePojo = new EmployeePojo(fetchedEmployeeEntity.getEmployeeId(),
					fetchedEmployeeEntity.getManagerId(), fetchedEmployeeEntity.getFirstName(),
					fetchedEmployeeEntity.getLastName(), fetchedEmployeeEntity.getEmail(),
					fetchedEmployeeEntity.getPassword(), fetchedEmployeeEntity.getUserName(),
					fetchedEmployeeEntity.isManagerType());

			allEmployeePojo.add(returnEmployeePojo);
		}

		return allEmployeePojo;
	}


	@Override
	public EmployeePojo register(EmployeePojo employeePojo) throws ApplicationException {

		EmployeeEntity employeeEntity = new EmployeeEntity();
		BeanUtils.copyProperties(employeePojo, employeeEntity);

		EmployeeEntity returnedEmployeeEntity = employeeDao.saveAndFlush(employeeEntity);

		employeePojo.setEmployeeId(returnedEmployeeEntity.getEmployeeId());
		return employeePojo;
	}

}
