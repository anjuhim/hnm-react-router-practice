import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import FormSelect from 'react-bootstrap/FormSelect';
import { SpinnerCircular } from 'spinners-react';

const ProductDetail = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const param = useParams();
  console.log('param', param);
  const getItem = async (id) => {
    let url = `https://my-json-server.typicode.com/anjuhim/hnm-react-router-practice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setItem(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    console.log('param', param.id);
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
                <div>₩{item?.price.toLocaleString('ko-KR')}</div>
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
