import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from "native-base";
import Logo from "./assets/ufpr.png";
import { TEMAS } from "./estilos/temas";
import { TouchableOpacity } from "react-native";


export default function Login({navigation}) {
  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      <Image source={Logo} alt="Logo do app da Aula" />
      <Text fontSize="2xl" fontWeight="bold" color={"gray.500"} textAlign="center" mt={5} >
        Faça login com suas credenciais!
      </Text>
      <Box>
        <FormControl mt={3}>
          <FormControl.Label>Email</FormControl.Label>
          <Input placeholder="Insira seu email!" size="lg" w="100%" borderRadius="lg" bgColor="gray.100" shadow={3} />
        </FormControl>
      </Box>

      <Box>
        <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input placeholder="Insira sua senha!" size="lg" w="100%" borderRadius="lg" bgColor="gray.100" shadow={3} />
        </FormControl>
      </Box>
      <Button w="100%" bg={TEMAS.colors.blue[800]} mt={10} borderRadius="lg" 
        onPress={() => navigation.navigate('Principal')}
      >Entrar</Button>
      <Link href="https://www.google.com" mt={5}>
        Recuperar senha!
      </Link>
      <Box mt={10} w="100%" flexDirection="row" justifyContent="center">
        <Text> Ainda não possui cadastro? </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('CadastroUnidade')}>
          <Text color="blue.500"> Faça seu cadastro! </Text>
        </TouchableOpacity>
      </Box>
    </VStack>

  );
}

