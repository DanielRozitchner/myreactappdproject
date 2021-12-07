const productos = [
    {id: 1, foto: 'https://images.deliveryhero.io/image/pedidosya/products/099f56f8-7942-4248-9c12-b2f5b88a7349.jpg?quality=90&width=614&webp=1' , cake: 'Cheesecake Maracuya', precio: 500, cantidad:1, stock: true },
    {id: 2, foto: 'https://images.deliveryhero.io/image/pedidosya/products/099f56f8-7942-4248-9c12-b2f5b88a7349.jpg?quality=90&width=614&webp=1' , cake: 'Cheesecake Oreo', precio: 500, cantidad:1, stock: true },
    {id: 3, foto: 'https://images.deliveryhero.io/image/pedidosya/products/778b84d6-cca4-47d2-849f-d1b4698c6493.jpg?quality=90&width=614&webp=1' , cake: 'Bombon Oreo', precio: 500, cantidad:1, stock: true },
    {id: 4, foto: 'https://images.deliveryhero.io/image/pedidosya/products/99a1d86f-8901-46ce-b10a-9dd0f58b9abe.jpg?quality=90&width=614&webp=1' , cake: 'Bombon Frutos Rojos', precio: 500, cantidad:1, stock: true },
];

export const getFetch = new Promise((resolve) => {
    setTimeout(()=>{
        resolve(productos)
    },3000)
})