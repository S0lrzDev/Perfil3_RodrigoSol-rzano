import { Image, StyleSheet, Text, View } from 'react-native';

import { COLORS, STATUS_COLORS } from '../constants/theme';

export default function CharacterCard({ character }) {
  const statusColor = STATUS_COLORS[character.status] ?? STATUS_COLORS.unknown;

  return (
    <View style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{character.name}</Text>
        <View style={styles.row}>
          <View style={[styles.dot, { backgroundColor: statusColor }]} />
          <Text style={styles.detail}>
            {character.status} - {character.species}
          </Text>
        </View>
        <Text style={styles.label}>Género</Text>
        <Text style={styles.detail}>{character.gender}</Text>
        <Text style={styles.label}>Origen</Text>
        <Text style={styles.detail}>{character.origin.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 12,
  },
  image: { width: 120, height: 140 },
  info: { flex: 1, padding: 12 },
  name: { color: COLORS.text, fontSize: 17, fontWeight: '700', marginBottom: 4 },
  row: { flexDirection: 'row', alignItems: 'center' },
  dot: { width: 8, height: 8, borderRadius: 4, marginRight: 6 },
  label: { color: COLORS.accent, fontSize: 12, marginTop: 6 },
  detail: { color: COLORS.textSoft, fontSize: 14 },
});
