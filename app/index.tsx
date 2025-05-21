import { Redirect } from 'expo-router';

export default function Home() {
  // Redirect to the tabs navigator
  return <Redirect href="/(tabs)/" />;

