package com.expense.reimbursementsystem.service;

import java.util.ArrayList;
import java.util.List;

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
	public List<ReimbursementPojo> getReimbursementsByStatus(String status) throws ApplicationException {
		// TODO Auto-generated method stub
		List<ReimbursementEntity> allReimbursementsEntity = reimbursementDao.findReimbursementByStatus(status);
		// now we have to copy each book entity object in the collection to a collection on book pojo
		// create a empty collection of book pojo
		List<ReimbursementPojo> allReimbursementsPojo = new ArrayList<ReimbursementPojo>();
		for(ReimbursementEntity fetchedReimbursementEntity: allReimbursementsEntity) {
			ReimbursementPojo returnReimbursementPojo = new ReimbursementPojo(fetchedReimbursementEntity.getReimbursementId(), fetchedReimbursementEntity.getEmployeeId(), 
					fetchedReimbursementEntity.getManagerId(), fetchedReimbursementEntity.getStatus(), fetchedReimbursementEntity.getAmount(), fetchedReimbursementEntity.getReason());
			allReimbursementsPojo.add(returnReimbursementPojo);
		}
		return allReimbursementsPojo;
	}


	@Override
	public ReimbursementPojo updateReimbursement(ReimbursementPojo reimbursementPojo) throws ApplicationException {
		ReimbursementEntity reimbursementEntity = new ReimbursementEntity();
		BeanUtils.copyProperties(reimbursementPojo, reimbursementEntity);
		ReimbursementEntity returnedReimbursementEntity = reimbursementDao.save(reimbursementEntity);
		
		return reimbursementPojo;
	}

}
