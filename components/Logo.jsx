import { Image, StyleSheet } from 'react-native';

export default function Logo({ size = 120 }) {
  return (
    <Image
      source={require('../assets/masterball.png')}
      style={[styles.logo, { width: size, height: size }]}
    />
  );
}

const styles = StyleSheet.create({
  logo: { marginBottom: 16, resizeMode: 'contain' },
});
