const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];


function getShoppingCart(ids, productList) {
	
	const cart = productList.filter(({ id }) => ids.includes(id))
	const products = cart.map(({ name, category }) => ({ name, category }))
	const looks = cart.reduce((looks, product) => {
		return looks.includes(product.category) ?
		looks : [...looks, product.category];
	}, []);

	const promotion = promotions[looks.length - 1]
	const fullPrice = cart.reduce((price, product) => {
		return price + product.regularPrice;
	}, 0).toFixed(2)

	const totalPrice = cart.reduce((fPrice, product) => {
		const pricePromotion = product.promotions.find(({looks}) =>
			looks.includes(promotion)
		)		
		return pricePromotion ?
		fPrice + pricePromotion.price : fPrice + product.regularPrice
	}, 0).toFixed(2)

	const discountValue = (fullPrice - totalPrice).toFixed(2)
	const discount = (`${((discountValue * 100) / fullPrice).toFixed(2)}%`)
		return {
		products, promotion, totalPrice,discountValue,discount
	}
}

module.exports = { getShoppingCart };