import React, { useState } from 'react';
import { Task } from '../types';

interface TaskFormProps {
  onTaskAdded: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('To Do');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a new task
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      category,
      isCompleted: false,
    };

    // Add the new task
    onTaskAdded(newTask);

    // Reset the form
    setTitle('');
    setDescription('');
    setCategory('To Do');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
        <option value="Timeout">Timeout</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
