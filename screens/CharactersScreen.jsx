import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

import CharacterCard from '../components/CharacterCard';
import PrimaryButton from '../components/PrimaryButton';
import { COLORS } from '../constants/theme';
import useCharacters from '../hooks/useCharacters';

export default function CharactersScreen() {
  const { characters, loading, error, loadMore } = useCharacters();

  if (error && characters.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>No se pudo cargar la información: {error}</Text>
        <PrimaryButton title="Reintentar" onPress={loadMore} />
      </View>
    );
  }

  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <CharacterCard character={item} />}
      contentContainerStyle={styles.list}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        loading ? <ActivityIndicator style={styles.loader} size="large" color={COLORS.accent} /> : null
      }
    />
  );
}

const styles = StyleSheet.create({
  list: { padding: 12 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  error: { color: COLORS.text, textAlign: 'center', marginBottom: 16 },
  loader: { marginVertical: 20 },
});
