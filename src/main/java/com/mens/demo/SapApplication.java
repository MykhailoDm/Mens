package com.mens.demo;

import com.mens.demo.textualController.TextualInformation;
import com.mens.demo.textualController.TextualRepo;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SapApplication {

    public static void main(String[] args) {
        SpringApplication.run(SapApplication.class, args);
    }

    @Bean
    ApplicationRunner applicationRunner(TextualRepo textualRepo) {
        return args -> {
          textualRepo.save(new TextualInformation("li {\n" +
                  "  width: 200px;\n" +
                  "  min-height: 250px;\n" +
                  "  border: 1px solid #000;\n" +
                  "  display: -moz-inline-stack;\n" +
                  "  display: inline-block;\n" +
                  "  vertical-align: top;\n" +
                  "  margin: 5px;\n" +
                  "  zoom: 1;\n" +
                  "  *display: inline;\n" +
                  "  _height: 250px;\n" +
                  "}"));
          textualRepo.save(new TextualInformation("class HelloWorld {\n" +
                  "    public static void main(String[] args) {\n" +
                  "        System.out.println(\"Hello, World!\");\n" +
                  "    }\n" +
                  "}"));
          textualRepo.save(new TextualInformation("def sum_eq_n?(arr, n)\n" +
                  "  return true if arr.empty? && n == 0\n" +
                  "  arr.product(arr).reject { |a,b| a == b }.any? { |a,b| a + b == n }\n" +
                  "end"));
        };
    }

}


