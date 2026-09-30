import { StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../constants/theme';

export default function InfoField({ label, value, last = false }) {
  return (
    <View style={[styles.field, last && styles.last]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.border,
  },
  last: { borderBottomWidth: 0 },
  label: { color: COLORS.accent, fontSize: 13, marginBottom: 4 },
  value: { color: COLORS.text, fontSize: 18, fontWeight: '600' },
});
