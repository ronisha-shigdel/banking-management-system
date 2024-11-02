package com.banking.banking_backend.service;

import com.banking.banking_backend.model.Loan;
import com.banking.banking_backend.repository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class LoanService {
    @Autowired
    private LoanRepository loanRepository;

    public List<Loan> getAllLoans() {
        return loanRepository.findAll();
    }

    public Loan saveLoan(Loan loan) {
        return loanRepository.save(loan);
    }
}