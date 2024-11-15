import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import CategorySlider from './components/CategorySlider';
import { Task } from './types';
import './styles.css';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('To Do');
  const [tasks, setTasks] = useState<Task[]>([]);

  // Function to add a new task to the list
  const handleTaskAdded = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Function to handle category change
  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory);
  };

  return (
    <div className="container">
      <h1>Task Management Application</h1>

      {/* Category Slider */}
      <CategorySlider
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Task Form */}
      <TaskForm onTaskAdded={handleTaskAdded} />

      {/* Task List */}
      <TaskList selectedCategory={selectedCategory} tasks={tasks} />
    </div>
  );
};

export default App;
