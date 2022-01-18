import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyComponent from './src/components/Fabgroup';
import CadastroScreen from './src/pages/CadastroScreen';
import InicioScreen from './src/pages/InicioScreen';
import Login from './src/pages/LoginScreen';
import RotinaScreen from './src/pages/RotinaScreen';
import Routes from './src/routes';

export default function App() {
  return (
    <Routes/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
