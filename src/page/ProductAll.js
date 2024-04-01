import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { SpinnerCircular } from 'spinners-react';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = () => {
    let searchQuery = query.get('q');
    let queryString = searchQuery ? `?q=${searchQuery}` : ``;
    dispatch(productAction.getProducts(queryString));
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
