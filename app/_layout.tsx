import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="index" options={{ title: 'Tasks' }} />
      <Stack.Screen name="task/[id]" options={{ title: 'Task Details' }} />
      <Stack.Screen name="create" options={{ title: 'New Task', presentation: 'modal' }} />
      <Stack.Screen name="edit/[id]" options={{ title: 'Edit Task', presentation: 'modal' }} />
    </Stack>
  );
}
