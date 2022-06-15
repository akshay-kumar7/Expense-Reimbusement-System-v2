package com.expense.reimbursementsystem.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import org.springframework.validation.FieldError;


@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

	// Defining Global Handlers for Exceptions
	
	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {

		//return super.handleMethodArgumentNotValid(ex, headers, status, request);
		
		Map<String, String> errors = new HashMap<>();
			ex.getBindingResult().getAllErrors().forEach((error) -> {
				String fieldName = ((FieldError)error).getField();
				String errorMessage = error.getDefaultMessage();
				errors.put(fieldName, errorMessage);
			});
			
			//Returning ResponseEntity, in that way we can manipulate response header and status if required
			return new ResponseEntity<Object>(errors, headers, status);
		
	}

	

}
