import { Input, FormControl } from "native-base";

interface InputProps{
    /**
     * interface InputProps que descreve as
     * propriedades que podem ser passadas para o componente
     */
    label?: string;
    placeholder: string;
    secureTextEntry?: boolean;
    value?: string,
    onChangeText?: (text: string)=> void;
    /**
     * label: string que serve como rótulo para a entrada de texto
     * placeholder: string obrigatória que define o texto de espaço
     * reservado na entrada de texto.
     * 
     * secureTextEntry: propriedade que indica se a entrada de
     * texto deve ocultar os caracteres
     * (normalmente usado para senhas). O valor padrão é false.
     * 
     * leftIcon: elemento React que pode ser usado como um ícone
     * à esquerda da entrada de texto
     */
}

export function EntradaTexto ({
    label,
    placeholder,
    secureTextEntry = false,
    value,
    onChangeText
} : InputProps) : JSX.Element {
    return (
        <FormControl mt={3}>
            {label && <FormControl.Label>{label}</FormControl.Label>}
            <Input placeholder={placeholder}
                size="lg"
                w="100%"
                borderRadius="lg"
                bgColor="gray.100"
                secureTextEntry={secureTextEntry}
                shadow={3}
                value={value}
                onChangeText={onChangeText}
                />

        </FormControl>
        /**
         * FormControl, é usado para criar um controle de formulário.
         * 
         * Se a propriedade label estiver definida, um rótulo será
         * renderizado usando <FormControl.Label>, se não,
         * nenhum rótulo será exibido.
         */

        /**
         * O componente Input é usado para criar a entrada de texto
         * Ele recebe propriedades, como placeholder para
         * texto de espaço reservado,
         * size para tamanho, w para largura,
         * borderRadius para definir o raio da borda,
         * bgColor para cor de fundo,
         * secureTextEntry para ocultar caracteres
         * e shadow para sombra
         */

    )
}




/**
 * Esse componente pode ser usado em seu aplicativo para criar
 * campos de entrada de texto personalizados,
 * permitindo que você defina facilmente propriedades como rótulo,
 * texto de espaço reservado, estilo e se a entrada deve ser segura
 * (para senhas).
 */