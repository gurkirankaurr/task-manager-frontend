import React from 'react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span>Category: {task.category}</span>
      <span>Status: {task.isCompleted ? 'Completed' : 'Pending'}</span>
    </div>
  );
};

export default TaskItem;
