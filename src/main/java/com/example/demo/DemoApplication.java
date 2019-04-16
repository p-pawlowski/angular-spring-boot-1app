package com.example.demo;

import com.example.demo.domain.Task;
import com.example.demo.service.TaskService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.util.Date;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(TaskService taskService) {
        return args -> {
            taskService.save(new Task(1L, "Create Spring Boot Application", new Date(), true));
            taskService.save(new Task(2L, "Create Spring Project Packages", new Date(), false));
            taskService.save(new Task(3L, "Create the Task Domain Calass", new Date(), false));
        };
    }

}
