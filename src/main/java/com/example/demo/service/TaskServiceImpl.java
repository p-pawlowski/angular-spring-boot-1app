package com.example.demo.service;

import com.example.demo.domain.Task;
import com.example.demo.repository.TaskRepository;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl  implements TaskService{

    private TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public Iterable<Task> list() {
        return this.taskRepository.findAll();
    }

    @Override
    public Task save(Task task) {
        return this.taskRepository.save(task);
    }
}
