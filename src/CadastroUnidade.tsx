import { VStack, Image, Box, Checkbox, ScrollView } from "native-base";
import Logo from "./assets/ufpr.png";
import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Botao } from "./componentes/Botao";
import { useState } from "react";
import { secoes } from "./utils/CadastroUnidadeTexto";

export default function CadastroUnidade() {

    const [numSecao, setNumSecao] = useState(0);
    /**
     * usa o hook useState para criar um estado local chamado numSecao.
     * Ele é usado para rastrear a seção atual do formulário de
     * cadastro
     */

  function avancarSecao() {
    if(numSecao < secoes.length - 1){
      setNumSecao(numSecao + 1);
    }
    
  }

  function voltarSecao() {
    if(numSecao > 0){
      setNumSecao(numSecao - 1);
    }
    
  }

  /**
   * duas funções que permitem avançar e voltar entre as seções
   * do formulário. Elas verificam se é possível avançar ou voltar
   * com base no valor atual de numSecao e, em seguida, atualizam o
   * estado numSecao de acordo
   */

  return (
    /**ScrollView para permitir a rolagem do conteúdo*/
    <ScrollView flex={1} p={5}>
    <VStack flex={1} alignItems="center" p={5} >
      <Image source={Logo} alt="Logo do app da Aula" />
      <Titulo>
        {secoes[numSecao].titulo}
      </Titulo>
      
      <Box>
       {
        secoes[numSecao].entradaTexto.map(entrada => {
          return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
        })}
      </Box>
      <Box>    
        {
          secoes[numSecao]?.checkbox?.map(checkbox => {
            return <Checkbox key={checkbox.id} value={checkbox.value}>{checkbox.value}</Checkbox>
       })}
  
      </Box>
      {console.log(numSecao)}
      {(numSecao < secoes.length - 1) && <Botao onPress= {()=> avancarSecao()} mb={10}> Avançar </Botao>}
      {(numSecao > 0 ) && <Botao onPress= {()=> voltarSecao()} bgColor='grey.400' > Voltar </Botao>}
      
    </VStack>
    </ScrollView>
  );
}


/**
 * VStack usado para organizar os elementos verticalmente
 * 
 * Titulo (importado), que exibe o título da seção atual
 * com base no valor de numSecao, e caixas de entrada de texto
 * com base nos dados de secoes[numSecao].entradaTexto.
 * 
 * bloco de checkboxes renderizado com base em
 * secoes[numSecao]?.checkbox, onde usa-se a função .map()
 * para criar checkboxes com base nos dados
 * 
 * dois botões, "Avançar" e "Voltar", que são renderizados
 * condicionalmente com base no valor de numSecao
 */