import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(
      `https://my-json-server.typicode.com/anjuhim/hnm-react-router-practice/product/${item?.id}`
    );
  };
  return (
    <div className="product-card" onClick={showDetail}>
      <img src={item?.img} alt={item?.title} />
      <div>{item?.choice ? 'concious choice' : ''}</div>
      <div>{item?.title}</div>
      <div>₩{`${item?.price.toLocaleString('ko-KR')}`}</div>
      <div>{item?.new ? '신제품' : ''}</div>
    </div>
  );
};

export default ProductCard;
