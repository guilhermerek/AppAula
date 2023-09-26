import { Text, ITextProps } from "native-base";
import { ReactNode } from "react";

interface TituloProps extends ITextProps{
    children: ReactNode
    /**
     * A interface inclui uma propriedade children do tipo ReactNode,
     * que permite que você defina o conteúdo do título.
     */
}

export function Titulo({children, ...rest}: TituloProps) {
    return(
        /**
         * componente Titulo. Ele recebe propriedades com base na
         * interface TituloProps
         */
        <Text
            fontSize="2xl"
            fontWeight="bold"
            color={"gray.500"}
            textAlign="center"
            mt={5}
            /**
             * fontSize para tamanho da fonte,
             * fontWeight para o peso da fonte,
             * color para a cor do texto,
             * textAlign para alinhamento de texto
             * e mt para margem superior
             */
            {...rest}
            >
            {children}
        </Text>
        /**
         * As propriedades passadas para o componente Titulo
         * (representadas por ...rest) permitem que seja fornecido
         * estilos adicionais ou outras configurações específicas
         * ao usar o componente
         */
    )
}


/**
 * componente Titulo pode ser usado para criar títulos
 */