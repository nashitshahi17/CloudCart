export function mapProduct(product) {

    return {
        id: product._id,
        name: product.name,
        image: product.image,
        description: product.description,
        price: product.price,
    };
}