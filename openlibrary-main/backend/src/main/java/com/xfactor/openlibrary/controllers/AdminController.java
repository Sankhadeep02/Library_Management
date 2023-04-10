package com.xfactor.openlibrary.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xfactor.openlibrary.domain.Admin;
import com.xfactor.openlibrary.repositories.AdminRepository;




@RestController
@RequestMapping("admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {
    
    private AdminRepository adminRepository;

    public AdminController(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    @PostMapping("/save")
    public Admin saveAdmin(@RequestBody Admin admin) {
        if (admin.getId() == null) {
            Admin admin2 = adminRepository.save(admin);
            return admin2;
        }
        return null;
    }

    @PutMapping("/update")
    public Admin updateAdmin(@RequestBody Admin admin) {
        if (admin.getId() != null) {
        // if(Objects.nonNull(admin.getId())){    
            Admin admin2 = adminRepository.save(admin);
            return admin2;
        }
        return null;

    }

    @GetMapping("/getall")
    public List<Admin> getAll() {
        return adminRepository.findAll();
    }

    @GetMapping("findById/{id}")
    public Admin findById(@PathVariable Long id) {
        Optional<Admin> optionalOfAdmin = adminRepository.findById(id);
        if (optionalOfAdmin.isPresent()) {
            return optionalOfAdmin.get();
        }
        return null;
    }

    @GetMapping("findTotal")
    public Long findTotal() {
        return adminRepository.count();
    }

    @DeleteMapping("delete/{id}")
    public void deleteAdmin(@PathVariable Long id) {
        adminRepository.deleteById(id);
    }
}
