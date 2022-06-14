package com.expense.reimbursementsystem.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.expense.reimbursementsystem.entity.ReimbursementEntity;

public interface ReimbursementDao extends JpaRepository<ReimbursementEntity, Integer>{

}
