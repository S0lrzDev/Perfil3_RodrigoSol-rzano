import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

import FormInput from '../components/FormInput';
import Logo from '../components/Logo';
import PrimaryButton from '../components/PrimaryButton';
import { COLORS } from '../constants/theme';
import useStudentForm from '../hooks/useStudentForm';

export default function LoginScreen({ navigation }) {
  const { values, error, setField, validate } = useStudentForm();

  const handleSubmit = () => {
    const student = validate();
    if (student) navigation.replace('Student', student);
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Logo />
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.subtitle}>Ingresa tus datos para continuar</Text>

        <View style={styles.card}>
          <FormInput
            label="Nombre"
            value={values.nombre}
            onChangeText={setField('nombre')}
            placeholder="Tu nombre completo"
          />
          <FormInput
            label="Carnet"
            value={values.carnet}
            onChangeText={setField('carnet')}
            placeholder="Ej. 20240001"
          />
          <FormInput
            label="Sección y grupo"
            value={values.seccionGrupo}
            onChangeText={setField('seccionGrupo')}
            placeholder="Ej. Sección A - Grupo 1"
            onSubmitEditing={handleSubmit}
          />
          {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>

        <PrimaryButton title="Ingresar" onPress={handleSubmit} style={styles.button} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: COLORS.background },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: { color: COLORS.text, fontSize: 26, fontWeight: '700' },
  subtitle: { color: COLORS.accent, fontSize: 14, marginBottom: 24 },
  card: {
    width: '100%',
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 20,
  },
  error: { color: COLORS.error, marginTop: 4 },
  button: { marginTop: 28 },
});
