import React, { createContext, useContext, useMemo, useState } from 'react';
import { Task } from './types';
import { mockTasks } from '../data/mockTasks';

type TasksContextValue = {
  tasks: Task[];
  addTask: (input: Pick<Task, 'title' | 'description'>) => Task;
  updateTask: (id: string, patch: Partial<Pick<Task, 'title' | 'description' | 'status'>>) => void;
  deleteTask: (id: string) => void;
  toggleStatus: (id: string) => void;
};

const TasksContext = createContext<TasksContextValue | undefined>(undefined);

const genId = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`;

export const TasksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const addTask: TasksContextValue['addTask'] = (input) => {
    const now = Date.now();
    const newTask: Task = {
      id: genId(),
      title: input.title.trim(),
      description: input.description.trim(),
      status: 'pending',
      createdAt: now,
      updatedAt: now
    };
    setTasks(prev => [newTask, ...prev]);
    return newTask;
  };

  const updateTask: TasksContextValue['updateTask'] = (id, patch) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, ...patch, updatedAt: Date.now() } : t))
    );
  };

  const deleteTask: TasksContextValue['deleteTask'] = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const toggleStatus: TasksContextValue['toggleStatus'] = (id) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === id
          ? {
              ...t,
              status: t.status === 'pending' ? 'completed' : 'pending',
              updatedAt: Date.now()
            }
          : t
      )
    );
  };

  const value = useMemo(
    () => ({ tasks, addTask, updateTask, deleteTask, toggleStatus }),
    [tasks]
  );

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
};

export const useTasks = () => {
  const ctx = useContext(TasksContext);
  if (!ctx) throw new Error('useTasks must be used within TasksProvider');
  return ctx;
};
