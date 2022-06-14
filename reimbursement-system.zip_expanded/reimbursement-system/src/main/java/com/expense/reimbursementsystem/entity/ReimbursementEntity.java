package com.expense.reimbursementsystem.entity;

import javax.persistence.*;

@Entity
@Table(name = "reimbursement")
public class ReimbursementEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "reimbursement_id")
	private int reimbursementId;
	
	@Column(name = "employee_id")
	private int employeeId;
	
	@Column(name = "manager_id")
	private int managerId;
	
	@Column(name = "status")
	private String status;
	
	@Column(name = "amount")
	private double amount;
	
	@Column(name = "reason")
	private String reason;

	public ReimbursementEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ReimbursementEntity(int reimbursementId, int employeeId, int managerId, String status, double amount,
			String reason) {
		super();
		this.reimbursementId = reimbursementId;
		this.employeeId = employeeId;
		this.managerId = managerId;
		this.status = status;
		this.amount = amount;
		this.reason = reason;
	}

	public int getReimbursementId() {
		return reimbursementId;
	}

	public void setReimbursementId(int reimbursementId) {
		this.reimbursementId = reimbursementId;
	}

	public int getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}

	public int getManagerId() {
		return managerId;
	}

	public void setManagerId(int managerId) {
		this.managerId = managerId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	@Override
	public String toString() {
		return "ReimbursementEntity [reimbursementId=" + reimbursementId + ", employeeId=" + employeeId + ", managerId="
				+ managerId + ", status=" + status + ", amount=" + amount + ", reason=" + reason + "]";
	}
}