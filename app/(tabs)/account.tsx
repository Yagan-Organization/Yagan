import { View, Text, StyleSheet } from 'react-native';
import AccountButton from "@/app/components/account/AccountButton";
export default function Account() {
  return (
    <View style={styles.container}>
<AccountButton></AccountButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    paddingHorizontal: 20,
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

