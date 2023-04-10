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

import com.xfactor.openlibrary.domain.Publisher;
import com.xfactor.openlibrary.repositories.PublisherRepository;

@RestController
@RequestMapping("publisher")
@CrossOrigin(origins = "http://localhost:4200")
public class PublisherControler {
    
    private PublisherRepository publisherRepository;

    public PublisherControler(PublisherRepository publisherRepository) {
        this.publisherRepository = publisherRepository;
    }

    @PostMapping("/save")
    public Publisher savePublisher(@RequestBody Publisher publisher) {
        if (publisher.getId() == null) {
            Publisher publisher2 = publisherRepository.save(publisher);
            return publisher2;
        }
        return null;
    }

    @PutMapping("/update")
    public Publisher updatePublisher(@RequestBody Publisher publisher) {
        if (publisher.getId() != null) {
            Publisher publisher2 = publisherRepository.save(publisher);
            return publisher2;
        }
        return null;
    }

    @GetMapping("/getall")
    public List<Publisher> getAll() {
        return publisherRepository.findAll();
    }

    @GetMapping("findById/{id}")
    public Publisher findById(@PathVariable Long id) {
        Optional<Publisher> optionalOfPublisher = publisherRepository.findById(id);
        if (optionalOfPublisher.isPresent()) {
            return optionalOfPublisher.get();
        }
        return null;
    }

    @GetMapping("findTotal")
    public Long findTotal() {
        return publisherRepository.count();
    }

    @DeleteMapping("delete/{id}")
    public void deletePublisher(@PathVariable Long id) {
        publisherRepository.deleteById(id);
    }
}
