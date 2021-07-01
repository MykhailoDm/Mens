package com.mens.demo.textualController;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class TextualInformation {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String text;

    public TextualInformation() {
    }

    public TextualInformation(String text) {
        this.text = text;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return "TextualInformation{" +
                "id=" + id +
                ", text='" + text + '\'' +
                '}';
    }
}
