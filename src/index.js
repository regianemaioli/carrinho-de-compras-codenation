const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];


function getShoppingCart(ids, productList) {
	//Monta a lista de produtos no carrinho com base nos ID's fornecidos
	const cart = productList.filter(({ id }) => ids.includes(id))

	// Cria a lista de produtos para validadeção
	const products = cart.map(({ name, category }) => ({ name, category }))

	// Verifica quais são os looks selecionados
	const looks = cart.reduce((looks, product) => {
		return looks.includes(product.category) ?
		looks : [...looks, product.category];
	}, []);

	// Sabendo quais são os looks, é possivel identificar o tipo de promoção para aplicar
	const promotion = promotions[looks.length - 1]

	// Calcula o valor total sem promoção
	const fullPrice = cart.reduce((price, product) => {
		return price + product.regularPrice;
	}, 0).toFixed(2)

	// Verificar o valor total a ser pago, com a promoção aplicada
	const totalPrice = cart.reduce((fPrice, product) => {
		const pricePromotion = product.promotions.find(({looks}) =>
			looks.includes(promotion)
		)		
		return pricePromotion ?
		fPrice + pricePromotion.price : fPrice + product.regularPrice
	}, 0).toFixed(2)

	// Calcula o valor do descont e o percentual de desconto
	const discountValue = (fullPrice - totalPrice).toFixed(2)
	const discount = (`${((discountValue * 100) / fullPrice).toFixed(2)}%`)

		// Monta o resultado para ser enviado ao fim da função	
		return {
		products, promotion, totalPrice,discountValue,discount
	}
}

module.exports = { getShoppingCart };