export interface Task {
    id: string;
    title: string;
    description: string;
    category: string; // e.g., "To Do", "In Progress", "Done", "Timeout"
    isCompleted: boolean;
    timeout?: number; // Time in seconds
  }
  