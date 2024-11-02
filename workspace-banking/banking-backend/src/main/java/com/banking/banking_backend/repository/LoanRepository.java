package com.banking.banking_backend.repository;

import com.banking.banking_backend.model.Loan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanRepository extends JpaRepository<Loan, Long> {
}