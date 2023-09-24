import { StyleSheet, View } from 'react-native';
import { TEMAS } from './estilos/temas';
import {  Text, Button, VStack, Image } from "native-base";
import Logo from "./assets/ufpr.png";


export default function Principal({navigation}) {
  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
    <Image source={Logo} alt="Logo do app da Aula" />
      
    <Text fontSize="2xl" fontWeight="bold" color={"gray.500"} textAlign="center" mt={5} >
        Tela Principal!
    </Text>
      <Button w="100%" bg={TEMAS.colors.blue[800]} mt={10} borderRadius="lg" 
        onPress={() => navigation.navigate('CadastroUnidade')}
      >Cadastro de Unidade</Button>
    </VStack>
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
