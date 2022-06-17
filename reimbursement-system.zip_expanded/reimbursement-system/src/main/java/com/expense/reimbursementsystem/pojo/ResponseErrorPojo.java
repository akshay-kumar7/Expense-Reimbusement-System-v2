package com.expense.reimbursementsystem.pojo;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class ResponseErrorPojo {

	private LocalDateTime date;
	private String errorMessage;
	private String exceptionType;
}
