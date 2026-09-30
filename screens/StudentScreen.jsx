import { StyleSheet, View } from 'react-native';

import InfoField from '../components/InfoField';
import Logo from '../components/Logo';
import PrimaryButton from '../components/PrimaryButton';
import { COLORS } from '../constants/theme';

export default function StudentScreen({ navigation, route }) {
  const { nombre, carnet, seccionGrupo } = route.params;

  return (
    <View style={styles.container}>
      <Logo size={140} />

      <View style={styles.card}>
        <InfoField label="Nombre" value={nombre} />
        <InfoField label="Carnet" value={carnet} />
        <InfoField label="Sección y grupo" value={seccionGrupo} last />
      </View>

      <PrimaryButton
        title="Ver personajes"
        onPress={() => navigation.navigate('Characters')}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: COLORS.background,
  },
  card: {
    width: '100%',
    backgroundColor: COLORS.card,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  button: { marginTop: 32 },
});
