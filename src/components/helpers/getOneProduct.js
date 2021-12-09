const oneProduct = [
    {id: 1,
    foto: 'https://images.deliveryhero.io/image/pedidosya/products/099f56f8-7942-4248-9c12-b2f5b88a7349.jpg?quality=90&width=614&webp=1',
    cake: 'Cheesecake Maracuya',
    precio: 500,
    cantidad:1, }]



const getOneProduct = new Promise((resolve) => {
    setTimeout(()=>{
        resolve(oneProduct);
    },3500);
});

export default getOneProduct;
    