import React from 'react';
import { Task } from '../types';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  selectedCategory: string;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, selectedCategory }) => {
  const filteredTasks = tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="task-list">
      <h2>{selectedCategory} Tasks</h2>
      {filteredTasks.length === 0 ? (
        <p>No tasks in this category.</p>
      ) : (
        filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TaskList;
