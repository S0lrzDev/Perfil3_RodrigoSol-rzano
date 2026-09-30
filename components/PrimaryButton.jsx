import { Pressable, StyleSheet, Text } from 'react-native';

import { COLORS } from '../constants/theme';

export default function PrimaryButton({ title, onPress, style }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    alignItems: 'center',
  },
  pressed: { opacity: 0.8 },
  text: { color: COLORS.text, fontSize: 16, fontWeight: '700' },
});
