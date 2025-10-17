import { Stack } from 'expo-router';
import { TasksProvider } from '../lib/TasksContext';

export default function RootLayout() {
  return (
    <TasksProvider>
      <Stack screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="index" options={{ title: 'Tasks' }} />
        <Stack.Screen name="task/[id]" options={{ title: 'Task Details' }} />
        <Stack.Screen name="create" options={{ title: 'New Task', presentation: 'modal' }} />
        <Stack.Screen name="edit/[id]" options={{ title: 'Edit Task', presentation: 'modal' }} />
      </Stack>
    </TasksProvider>
  );
}
