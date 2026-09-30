# PokeApp

Aplicación móvil hecha con **Expo (React Native)**. Pide los datos del estudiante, los muestra en pantalla y luego lista los personajes de la API de **Rick and Morty**.

## Descarga del APK

```
https://expo.dev/artifacts/eas/RKJ7BY8LR65CpyX6htmfrweZOA6_zNmKYaJODlV08As.apk
```

Página del build en Expo, con código QR para instalar desde el celular:
https://expo.dev/accounts/s0lrzdev/projects/pokeapp/builds/f6b99091-efd3-437a-b49f-39d6d390886e

## Requerimientos cumplidos

| Requerimiento | Implementación |
|---|---|
| **Splash Screen** personalizado | Master Ball sobre fondo `#1B163A`, configurado con el plugin `expo-splash-screen` en `app.json` |
| **Ícono** personalizado (Master Ball) | `assets/icon.png`, más el ícono adaptativo y el monocromático de Android, todos generados desde `assets/masterball.png` |
| **Pantalla 1**: Nombre, Carnet, Sección y grupo, con botón a la pantalla 2 | `screens/StudentScreen.jsx`. Los datos se ingresan antes en `screens/LoginScreen.jsx` |
| **Pantalla 2**: datos de una API | `screens/CharactersScreen.jsx` consume `https://rickandmortyapi.com/api/character` |

## Flujo de la app

1. **Ingreso**: formulario con Nombre, Carnet y Sección y grupo. No deja continuar si falta algún campo.
2. **Información del estudiante** (Pantalla 1): muestra los datos ingresados y tiene el botón **"Ver personajes"**.
3. **Rick and Morty** (Pantalla 2): lista de personajes con imagen, estado, especie, género y origen. Carga más personajes al hacer scroll y tiene botón de reintentar si falla la conexión.

## Estructura del proyecto

```
pokeapp/
├── App.jsx                     Navegación (Login → Estudiante → Personajes)
├── index.js                    Punto de entrada
├── app.json                    Configuración de Expo (nombre, ícono, splash)
├── eas.json                    Perfiles de build de EAS
├── constants/
│   └── theme.js                Paleta de colores
├── hooks/
│   ├── useStudentForm.js       Estado y validación del formulario
│   └── useCharacters.js        Consumo de la API con paginación
├── components/
│   ├── Logo.jsx
│   ├── PrimaryButton.jsx
│   ├── FormInput.jsx
│   ├── InfoField.jsx
│   └── CharacterCard.jsx
├── screens/
│   ├── LoginScreen.jsx
│   ├── StudentScreen.jsx
│   └── CharactersScreen.jsx
├── assets/                     Íconos, splash y masterball.png
└── scripts/
    └── generate_icons.py       Genera los íconos a partir de masterball.png
```

## Tecnologías

- Expo SDK 57 / React Native 0.86
- React Navigation (Native Stack)
- Hooks de React (`useState`, `useEffect`, `useCallback`, `useRef`) y hooks personalizados
- EAS Build para generar el APK

## Ejecutar en desarrollo

Requisitos: Node.js 18 o superior y la app **Expo Go** en el celular (o un emulador de Android).

```bash
npm install
npx expo start
```

Escanea el código QR con Expo Go, o presiona `a` para abrir la app en el emulador de Android.

## Generar el APK con EAS

```bash
npm install -g eas-cli
eas login
eas build:configure
eas build -p android --profile preview
```

El perfil `preview` de `eas.json` usa `"buildType": "apk"`, así que genera un `.apk` instalable directamente en lugar de un `.aab`. Cuando termina el build, EAS muestra el link de descarga.

## Regenerar los íconos

Si cambias `assets/masterball.png`, vuelve a generar todos los íconos con:

```bash
pip install pillow
python scripts/generate_icons.py
```
