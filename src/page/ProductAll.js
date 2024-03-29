import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { SpinnerCircular } from 'spinners-react';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get('q');
    let queryString = searchQuery ? `?q=${searchQuery}` : ``;
    let url = `https://my-json-server.typicode.com/anjuhim/hnm-react-router-practice/products${queryString}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getProducts();
  }, [query]);

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
