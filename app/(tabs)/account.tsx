import { View, Text, StyleSheet } from 'react-native';

export default function Account() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>
      <Text style={styles.subtitle}>Your account information will appear here</Text>
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

