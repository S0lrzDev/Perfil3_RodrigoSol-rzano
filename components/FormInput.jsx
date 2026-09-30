import { StyleSheet, Text, TextInput, View } from 'react-native';

import { COLORS } from '../constants/theme';

export default function FormInput({ label, ...inputProps }) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholderTextColor={COLORS.placeholder} {...inputProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  field: { marginBottom: 14 },
  label: { color: COLORS.accent, fontSize: 13, marginBottom: 6 },
  input: {
    backgroundColor: COLORS.background,
    color: COLORS.text,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
});
