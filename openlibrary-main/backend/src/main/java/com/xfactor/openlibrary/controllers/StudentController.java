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

import com.xfactor.openlibrary.domain.Student;
import com.xfactor.openlibrary.repositories.StudentRepository;

@RestController
@RequestMapping("student")
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {

    private StudentRepository studentRepository;

    public StudentController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @PostMapping("/save")
    public Student saveStudent(@RequestBody Student student) {
        if (student.getId() == null) {
            Student student2 = studentRepository.save(student);
            return student2;
        }
        return null;
    }

    @PutMapping("/update")
    public Student updateStudent(@RequestBody Student student) {
        if (student.getId() != null) {
            Student student2 = studentRepository.save(student);
            return student2;
        }
        return null;
    }

    @GetMapping("/getall")
    public List<Student> getAll() {
        return studentRepository.findAll();
    }

    @GetMapping("findById/{id}")
    public Student findById(@PathVariable Long id) {
        Optional<Student> optionalOfStudent = studentRepository.findById(id);
        if (optionalOfStudent.isPresent()) {
            return optionalOfStudent.get();
        }
        return null;
    }

    @GetMapping("findTotal")
    public Long findTotal() {
        return studentRepository.count();
    }

    @DeleteMapping("delete/{id}")
    public void deleteStudent(@PathVariable Long id) {
        studentRepository.deleteById(id);
    }
}
