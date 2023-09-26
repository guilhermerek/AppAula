import { Button, IButtonProps } from "native-base";
import { ReactNode } from "react";

interface ButtonProps extends IButtonProps {
    children: ReactNode;
    /**
     * children: É do tipo ReactNode e é usado para
     * passar os elementos que serão exibidos dentro do botão
     * 
     */
    autoSize?: boolean;
    /**
     * autoSize?: boolean: permite
     * controlar se o botão deve ajustar automaticamente
     * O valor padrão é false
     */
    color?: string;
    /**
     * color?: string: permite definir
     * a cor de
     * fundo do botão. O valor padrão é 'blue.800'
     */
}

export function Botao({children, autoSize = false, color, ...rest}: ButtonProps){
    /**
     * componente Botao que exportamos.
     * Ele recebe propriedades com base na interface ButtonProps
     * lá de cima
     */
    return (
        <Button
            w={autoSize ? 'auto': '100%'}
            bgColor={color || 'blue.800'}
            mt={10}
            borderRadius="lg"
            _text={{color: 'white'}}
            /**
             * w para largura, bgColor para cor de fundo,
             * mt para margem superior, borderRadius para definir o
             * raio da borda e _text para estilo do texto dentro do
             * botão
             */
            {...rest}
            >
                {children}

            </Button>
            /**
             * O conteúdo passado como filho (usando {children}) será
             * renderizado dentro do botão
             */
    )
}
/**
 * Esse componente Botao pode ser usado em seu aplicativo React Native
 * para criar botões personalizados, permitindo que você defina
 * facilmente propriedades como cor, tamanho e conteúdo do botão.
 */