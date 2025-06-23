import { View, StyleSheet } from 'react-native';
import AccountButton from "@/app/components/account/AccountButton";
export default function Account() {
  return (
    <View style={styles.container}>
      <AccountButton IconPNG={require("@/assets/images/IcoAccount/legal.png")} IconSize={40} ButtonText="Mention légales" />
      <AccountButton IconPNG={require("@/assets/images/IcoAccount/CLUF.png")} IconSize={30} ButtonText="Conditions d'utilisations" />
      <AccountButton IconPNG={require("@/assets/images/IcoAccount/contribute.png")} IconSize={30} ButtonText="Contributions & soutien" />
      <AccountButton IconPNG={require("@/assets/images/IcoAccount/notif.png")} IconSize={25} ButtonText="Notifications" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
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

