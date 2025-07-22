import React, { useEffect, useState } from 'react';

//Componente para mostrar el detalle de un producto
const ProductDetail = ({ productId }) => {
    const [product, setProduct] = useState(null); //estado para el producto

    useEffect(() => {
        //Obtiene los datos del producto desde el backend
        fetch(`http://localhost:3001/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.error(err));
    }, [productId]);

    if (!product) return <div>Cargando...</div>; //muestra mensaje mientras carga

    return (
        <div className="product-detail">
            <h2>{product.nombre}</h2>
            <p><strong>Categoria:</strong> {product.categoria}</p>
            <p><strong>Precio:</strong> ${product.precio}</p>
            <p><strong>Descripcion:</strong> {product.descripcion}</p>
        </div>
    );
};

export default ProductDetail;