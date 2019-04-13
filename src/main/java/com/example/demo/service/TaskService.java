package com.example.demo.service;


import com.example.demo.domain.Task;

public interface TaskService {

    Iterable<Task> list();

    Task save(Task task);

}
