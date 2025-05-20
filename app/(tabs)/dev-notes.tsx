import { View, Text, StyleSheet } from 'react-native';

export default function DevNotes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Developer Notes</Text>
      <Text style={styles.subtitle}>This is where developer notes would appear</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80, // Add padding for the menu at bottom
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

