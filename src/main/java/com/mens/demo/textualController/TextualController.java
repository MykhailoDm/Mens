package com.mens.demo.textualController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TextualController {

    @Autowired
    TextualRepo textualRepo;

    @CrossOrigin(origins = "http://mens-sap.herokuapp.com/")
    @RequestMapping("/api/text")
    public TextualInformation returnText() {
        long count = textualRepo.count();
        long id = (long) (Math.random()*count + 1);
        return textualRepo.findById(id).get();
    }

}
