import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import FormSelect from 'react-bootstrap/FormSelect';
import { SpinnerCircular } from 'spinners-react';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/productAction';

const ProductDetail = () => {
  const item = useSelector((state) => state.product.productItem);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const param = useParams();
  const getItem = async (id) => {
    dispatch(productAction.getProductDetail(id));
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getItem(param.id);
  }, []);

  return (
    <Container>
      <Row className="justify-content-md-center">
        {loading ? (
          <SpinnerCircular enabled={loading} size={100} />
        ) : (
          <>
            <Col>
              <img src={item?.img} alt={item?.title} />
            </Col>
            <Col>
              <Stack gap={2}>
                <div>{item?.title}</div>
                <div>₩{item?.price}</div>
                <div>{item?.choice ? 'concious choice' : ''}</div>
                <div>
                  <FormSelect>
                    <option>사이즈 선택</option>
                    {item.size?.map((size, index) => (
                      <option key={index} value={size}>
                        {size}
                      </option>
                    ))}
                  </FormSelect>
                </div>
                <Button variant="dark">추가</Button>
              </Stack>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default ProductDetail;
