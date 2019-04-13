package com.example.demo.controller;

import com.example.demo.domain.Task;
import com.example.demo.service.TaskService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(value={"","/"})
    public Iterable<Task> listTasks(){
        return this.taskService.list();
    }

    @PostMapping("/save")
    public Task saveTask(@RequestBody Task task){
        return this.taskService.save(task);
    }

}
