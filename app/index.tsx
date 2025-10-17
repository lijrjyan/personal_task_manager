import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 }}>
      <Text>Task Manager Home</Text>
      <Link href="/create">Go to Create</Link>
    </View>
  );
}
