export interface Reimbursement{
    reimbursementId: number,
    employeeId: number,
    managerId: number,
    status: string,
    amount: number,
    reason: string
}