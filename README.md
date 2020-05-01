## Desafio:

Neste desafio, foram praticados conhecimentos em:
- **Programação Funcional**
- **Funções puras**
- **Métodos de Arrays**
- **Composição de funções**

## Requisitos
​
Para este desafio você precisará:
- NodeJS LTS (8.12.0+)
- Instale as dependências do projeto através do comando `npm install`.

# Promoções aplicadas a um carrinho de compras usando NodeJS

O arquivo `src/data/products.json` possui uma lista de **25 produtos** diferentes,
distribuídos em **4 categorias**:

-  **`T-SHIRTS`**
-  **`PANTS`**
-  **`SHOES`**
-  **`BAGS`**

O `objeto` de cada produto possui **preço padrão** que pode ser identificado na propriedade `regularPrice`, e também  uma lista de **preços promocionais** identificado na propriedade `promotions`.

O **preço final do carrinho** vai ser calculado de acordo com a **combinação das categorias** dos produtos adicionados.

As promoções do carrinho serão calculadas de acordo com as seguintes combinações de looks:
* **`SINGLE LOOK`** - Se todos os produtos do carrinho pertencem a uma única categoria.
* **`DOUBLE LOOK`** - Se pelo menos 2 produtos adicionados pertencem a categorias diferentes.
* **`TRIPLE LOOK`**  - Se pelo menos 3 produtos pertencem a categorias diferentes.
* **`FULL LOOK`** - Se pelo menos 4 produtos pertencem a mesma categoria.

> Se a combinação de produtos adicionados no carrinho corresponderem a uma das condições acima, o valor dos produtos que serão calculados serão os correspondentes na propriedade **`looks`**.

### Resolução da seguinte situação:
Dada a entrada de um **Array** com os `ids` dos produtos, um `objeto` contendo as seguintes proriedades deve ser retornado:

 - Os nomes dos produtos e suas respectivas categorias.
 - A promoção aplicada para calcular os preços do carrinho, exemplo: `TRIPLE LOOK`.
 - O valor total (já com os descontos aplicados, caso exista).
 - O total de desconto.
 - A porcentagem de desconto.

