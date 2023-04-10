package com.xfactor.openlibrary.controllers;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.xfactor.openlibrary.domain.Loan;
import com.xfactor.openlibrary.repositories.LoanRepository;

@RestController
@RequestMapping("loan")
@CrossOrigin(origins = "http://localhost:4200")
public class LoanController {
    
    private LoanRepository loanRepository;

    public LoanController(LoanRepository loanRepository) {
        this.loanRepository = loanRepository;
    }

    @PostMapping("/save")
    public Loan saveLoan(@RequestBody Loan loan) {
        if (loan.getId() == null) {
            Loan loan2 = loanRepository.save(loan);
            return loan2;
        }
        return null;
    }

    @PutMapping("/update")
    public Loan updateLoan(@RequestBody Loan loan) {
        if (loan.getId() != null) {
            Loan loan2 = loanRepository.save(loan);
            return loan2;
        }
        return null;
    }

    @GetMapping("/getall")
    public List<Loan> getAll() {
        return loanRepository.findAll();
    }

    @GetMapping("findById/{id}")
    public Loan findById(@PathVariable Long id) {
        Optional<Loan> optionalOfLoan = loanRepository.findById(id);
        if (optionalOfLoan.isPresent()) {
            return optionalOfLoan.get();
        }
        return null;
    }

    @GetMapping("findTotal")
    public Long findTotal() {
        return loanRepository.count();
    }

    @DeleteMapping("delete/{id}")
    public void deleteLoan(@PathVariable Long id) {
        loanRepository.deleteById(id);
    }
}
