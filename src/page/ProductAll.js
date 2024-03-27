import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { SpinnerCircular } from 'spinners-react';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProducts = async () => {
    let url = 'http://localhost:5000/products';
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getProducts();
  }, []);

  return (
    <div>
      <Container fluid="md" className="container">
        {loading ? (
          <SpinnerCircular enabled={loading} size={100} />
        ) : (
          <Row>
            {productList.map((menu) => (
              <Col key={menu.id} lg={3}>
                <ProductCard item={menu} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ProductAll;
