package com.expense.reimbursementsystem.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {

	private static final Logger LOG = LoggerFactory.getLogger(LoggingAspect.class);
	
	@Before("execution(* com.expense.reimbursementsystem..*(..)))")
	public void beforeLogging(JoinPoint joinPoint) {
		String className = joinPoint.getSignature().getDeclaringType().getSimpleName();
		String methodName = joinPoint.getSignature().getDeclaringType().getName();
		LOG.info("Entering " + className + "." + methodName);
	}
	
	@After("execution(* com.expense.reimbursementsystem..*(..)))")
	public void afterLogging(JoinPoint joinPoint) {
		String className = joinPoint.getSignature().getDeclaringType().getSimpleName();
		String methodName = joinPoint.getSignature().getDeclaringType().getName();
		LOG.info("Exiting " + className + "." + methodName);
	}
}
