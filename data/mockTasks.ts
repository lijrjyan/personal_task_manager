import { Task } from '../lib/types';

const now = Date.now();
export const mockTasks: Task[] = [
  {
    id: 't1',
    title: 'Read React Native docs',
    description: 'Skim the core components and APIs',
    status: 'pending',
    createdAt: now - 86400000,
    updatedAt: now - 86400000
  },
  {
    id: 't2',
    title: 'Set up Expo Router',
    description: 'Add Stack and screens',
    status: 'completed',
    createdAt: now - 43200000,
    updatedAt: now - 43200000
  }
];
