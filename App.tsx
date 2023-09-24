import { NativeBaseProvider, StatusBar } from 'native-base';
import { TEMAS } from './src/estilos/temas';
//import Login from './src/Login';
//import CadastroUnidade from './src/CadastroUnidade';
import Rotas from './src/Rotas';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]}></StatusBar>
      <Rotas/>
    </NativeBaseProvider>
  );
}