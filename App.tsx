import { NativeBaseProvider, StatusBar } from 'native-base';
import { TEMAS } from './src/estilos/temas';
//import Login from './src/Login';
import CadastroUnidade from './src/CadastroUnidade';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]}></StatusBar>
      <CadastroUnidade/>
    </NativeBaseProvider>
  );
}