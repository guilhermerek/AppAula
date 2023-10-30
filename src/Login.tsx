import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from "native-base";
import Logo from "./assets/ufpr.png";
import { TEMAS } from "./estilos/temas";
import { TouchableOpacity } from "react-native";
import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { useState } from "react";
import { fazerLogin } from "./servicos/autenticacao";

/**componente principal, que representa a tela de login*/

export default function Login({navigation}) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function login() {
    const resultado = await fazerLogin(email,senha)
    console.log(resultado);
    if(resultado && resultado.result.id){
      navigation.replace('Tabs');
    }else{
      console.log("Erro");
    }
  }

  return (
    /**
     * organizado em um VStack com configurações para alinhar
     * o conteúdo ao centro verticalmente (alignItems="center")
     * e preenchimento (p={5}) e justificar o conteúdo ao centro
     * horizontalmente (justifyContent="center").
     */
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">

      <Image source={Logo} alt="Logo do app da Aula" />
      <Titulo> Faça login com suas credenciais! </Titulo>

      <Box>
        <EntradaTexto label="Email" placeholder="Insira seu email" value={email} onChangeText={setEmail} />
        <EntradaTexto label="Senha" placeholder="Insira sua senha" value={senha} onChangeText={setSenha} secureTextEntry={true} />

      </Box>
      <Button w="100%" bg={TEMAS.colors.blue[800]} mt={10} borderRadius="lg" 
        onPress={login}
      >Entrar</Button>
      <Link href="https://www.google.com" mt={5}>
        Recuperar senha!
      </Link>
      <Box mt={10} w="100%" flexDirection="row" justifyContent="center">
        <Text> Ainda não possui cadastro? </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('CadastroUsuario')}>
          <Text color="blue.500"> Faça seu cadastro! </Text>
        </TouchableOpacity>
      </Box>
    </VStack>

  );
}

/** exibe uma imagem (Image source={Logo} alt="Logo do app da Aula"),
 * um título informando ao usuário para fazer
 * login com suas credenciais, e campos de entrada de email e senha
 * usando FormControl e Input */

/**
 * O botão "Entrar" permite ao usuário acessar o aplicativo
 * quando pressionado. Ele tem uma ação definida usando a
 * propriedade onPress, que, quando ativada, navegará para a
 * tela "Principal"
 */

/**
 * Abaixo do botão de login, tem um link "Recuperar senha!"
 * que permite acessar uma página para recuperar a senha
 * (definido com a propriedade href)
 */

/**
 * link "Faça seu cadastro!" que, quando pressionado,
 * navegará para a tela "CadastroUnidade"
 * (usando navigation.navigate
 */