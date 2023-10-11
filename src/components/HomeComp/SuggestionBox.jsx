import React from 'react';
import { faker } from '@faker-js/faker';
import productImages from '../../assets/images/images.js';
import './Search.scss'
import { useNavigate } from 'react-router-dom';

const SuggestionBox = () => {
  const products = [];
  const navigate = useNavigate();

  for (let i = 0; i < 5; i++) {
    const productName = faker.commerce.productName();
    const productPrice = faker.commerce.price();
    const productDescription = faker.commerce.productDescription();
    const imageUrl = productImages[i];

    products.push({
      id: i + 1,
      name: productName,
      price: productPrice,
      description: productDescription,
      image: imageUrl,
    });

    // console.log(faker)
  }

  const clickHandle = () =>{
    navigate('/products');
  }

  return (
    <div className='suggContainer'>
      <h1>Latest Trends</h1>
      <ul>
        {products.map(product => (
          <li key={product.id} onClick={clickHandle}>
            <img src={product.image} alt={product.name} />
            <strong>{product.name}</strong>
          </li>
        ))}
      </ul>
      <h1>Popular Suggestions</h1>
      <ul className="otherNames">
        {
          products.map(product => (
            <li key={product.id} onClick={clickHandle}>{product.name}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default SuggestionBox;
