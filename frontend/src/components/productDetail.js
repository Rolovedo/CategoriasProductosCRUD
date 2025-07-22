import React, { useEffect, useState } from 'react';

const ProductDetail = ({ productId }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.error(err));
    }, [productId]);

    if (!product) return <div>Cargando...</div>;

    return (
        <div className="product-detail">
            <h2>{product.nombre}</h2>
            <p><strong>Categoría:</strong> {product.categoria}</p>
            <p><strong>Precio:</strong> ${product.precio}</p>
            <p><strong>Descripción:</strong> {product.descripcion}</p>
            {/* Agrega más campos según tu modelo de producto */}
        </div>
    );
};

export default ProductDetail;