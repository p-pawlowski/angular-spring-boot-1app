package com.example.demo.repository;

import com.example.demo.domain.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task,Long> {

}
