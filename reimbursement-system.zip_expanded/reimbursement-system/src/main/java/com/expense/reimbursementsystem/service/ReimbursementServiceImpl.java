package com.expense.reimbursementsystem.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expense.reimbursementsystem.dao.ReimbursementDao;
import com.expense.reimbursementsystem.entity.ReimbursementEntity;
import com.expense.reimbursementsystem.exception.ApplicationException;
import com.expense.reimbursementsystem.pojo.ReimbursementPojo;

@Service
public class ReimbursementServiceImpl implements ReimbursementService{
	
	@Autowired
	ReimbursementDao reimbursementDao;

	@Override
	public ReimbursementPojo submitInfo(ReimbursementPojo reimbursementPojo) throws ApplicationException {
		// TODO Auto-generated method stub
		
		ReimbursementEntity reimbursementEntity = new ReimbursementEntity();
		BeanUtils.copyProperties(reimbursementPojo, reimbursementEntity);
		
		ReimbursementEntity returnedReimbursementEntity = reimbursementDao.save(reimbursementEntity);
		
		return reimbursementPojo;
	}
	
	

}
