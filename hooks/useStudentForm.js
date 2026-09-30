import { useState } from 'react';

const EMPTY_FORM = { nombre: '', carnet: '', seccionGrupo: '' };

export default function useStudentForm() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [error, setError] = useState('');

  const setField = (field) => (text) => {
    setValues((prev) => ({ ...prev, [field]: text }));
  };

  // Devuelve los datos limpios si son validos, o null si falta alguno
  const validate = () => {
    const student = {
      nombre: values.nombre.trim(),
      carnet: values.carnet.trim(),
      seccionGrupo: values.seccionGrupo.trim(),
    };
    if (!student.nombre || !student.carnet || !student.seccionGrupo) {
      setError('Completa todos los campos');
      return null;
    }
    setError('');
    return student;
  };

  return { values, error, setField, validate };
}
