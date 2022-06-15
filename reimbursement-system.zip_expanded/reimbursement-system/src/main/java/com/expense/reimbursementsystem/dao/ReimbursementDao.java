package com.expense.reimbursementsystem.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.expense.reimbursementsystem.entity.ReimbursementEntity;

@Repository
public interface ReimbursementDao extends JpaRepository<ReimbursementEntity, Integer>{
	
	List<ReimbursementEntity> findReimbursementByStatus(String status);

}
