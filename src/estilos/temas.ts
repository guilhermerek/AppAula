import { extendTheme } from "native-base";

export const TEMAS = extendTheme({
    colors: {
        grey: {
            300: '#8D8D99'
        },
        blue: {
            500: '#339CFF',
            800: '#0B3B60'
        },
        white: '#fff',
        black: '#000'
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24
    }
});

/**
 *define o tema personalizado dentro da constante TEMAS.
 O tema é um objeto JavaScript que possui duas principais propriedades:
 colors e fontSizes.

        colors: Essa propriedade define algumas cores personalizadas que podem ser usadas.
        Elas são organizadas em grupos, "grey", "blue", "white" e "black".
        Cada grupo possui valores numerados ("300", "500", "800") que representam
        diferentes tons dessa cor.

        fontSizes: Essa propriedade define tamanhos de fontes
        personalizadas. Os tamanhos de fonte são "xs" (extra pequeno),
        "sm" (pequeno), "md" (médio), "lg" (grande) e "xl" (extra grande).

Esse tema personalizado pode ser aplicado globalmente
 */