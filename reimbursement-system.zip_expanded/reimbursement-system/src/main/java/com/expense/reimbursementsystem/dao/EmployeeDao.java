package com.expense.reimbursementsystem.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.expense.reimbursementsystem.entity.EmployeeEntity;
import com.expense.reimbursementsystem.pojo.EmployeePojo;

@Repository
public interface EmployeeDao extends JpaRepository<EmployeeEntity, Integer> {
	
	//Custom Finder for Login
	List<EmployeeEntity> findByEmailAndPassword(String email, String password);

}
