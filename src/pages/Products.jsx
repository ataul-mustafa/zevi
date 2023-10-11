import Search from '../components/ProdComp/SearchBar.jsx';
import images from '../assets/images/images.js'
import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import ProductCard from '../components/ProdComp/ProductCard.jsx';
import Rating from '@mui/material/Rating';
import './Products.scss'

const Products = () => {
  const [allProd, SetAllProd] = useState([]);
  const [prod, setProd] = useState([]);

  useEffect(() => {
    const products = [];
    for (let i = 0; i < 8; i++) {
      const productName = faker.commerce.productName();
      const productPrice = faker.commerce.price();
      const productDescription = faker.commerce.productDescription();
      const productRating = Math.floor(Math.random() * 5) + 1; // Generates a random rating between 1 and 5
      const brandName = i % 2 === 0 ? 'adidas' : 'gucci'; // Generate a random company name
      const image = images[i];

      products.push({
        id: i + 1,
        name: productName,
        price: productPrice,
        description: productDescription,
        rating: productRating,
        brand: brandName,
        image
      });
    }
    setProd(products);
    SetAllProd(products);
  }, []);


  const handleBrandFilter = (brand) => {
    console.log(prod)
    const filterd = prod.filter(item => item.brand === brand)
    SetAllProd([...filterd]);
  };

  const handlePriceFilter = (min, max) => {
    // allProd = prod;
    const filterd = prod.filter(item => item.price >= min && item.price <= max)
    SetAllProd([...filterd]);
  };

  const handleRatingFilter = (rating) => {
    // allProd = prod;
    const filterd = prod.filter(item => item.rating >= rating)
    SetAllProd([...filterd]);
  };

  return (
    <div className='productsContainer'>
      <Search />
      <div className="productBox">
        <form className="filters">
          <h1>Search Results</h1>
          <div className="type">
            <div className="heading">BRAND</div>
            <div className='inp' onClick={() => handleBrandFilter('gucci')}>
              <input type="checkbox" name="group1" />
              <span className='cat'>Gucci</span>
            </div>
            <div className='inp' onClick={() => handleBrandFilter('adidas')} >
              <input type="checkbox" name="group1" />
              <span className='cat'>Adidas</span>
            </div>
          </div>
          <div className="type">
            <div className="heading">PRICE RANGE</div>
            <div className='inp' onClick={() => { handlePriceFilter(0, 500) }}>
              <input type="checkbox" name="group1" />
              <span className='cat'>Under 500</span>
            </div>
            <div className='inp' onClick={() => { handlePriceFilter(1000, 3000) }}>
              <input type="checkbox" name="group1" />
              <span className='cat'>1000- to 3000</span>
            </div>
          </div>
          <div className="type">
            <div className="heading">RATINGS</div>
            <div onClick={() => handleRatingFilter(5)}>
              <input type="checkbox" name="group1" />
              <Rating className='rating' name="size-small" defaultValue={5} size="small" readOnly />
            </div>
            <div onClick={() => handleRatingFilter(4)}>
              <input type="checkbox" name="group1" />
              <Rating className='rating' name="size-small" defaultValue={4} size="small" readOnly />
            </div>
            <div onClick={() => handleRatingFilter(3)}>
              <input type="checkbox" name="group1" />
              <Rating className='rating' name="size-small" defaultValue={3} size="small" readOnly />
            </div>
            <div onClick={() => handleRatingFilter(2)}>
              <input type="checkbox" name="group1" />
              <Rating className='rating' name="size-small" defaultValue={2} size="small" readOnly />
            </div>
            <div onClick={() => handleRatingFilter(1)}>
              <input type="checkbox" name="group1" />
              <Rating className='rating' name="size-small" defaultValue={1} size="small" readOnly />
            </div>

          </div>
        </form>
        <ul className='products'>
          {allProd.map(product => (
            <ProductCard item={product} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;



// import React, { useEffect, useState } from 'react';
// import ProductCard from '../components/ProdComp/ProductCard.jsx';
// import Rating from '@mui/material/Rating';
// import images from '../assets/images/images.js'
// import { faker } from '@faker-js/faker';
// import Search from '../components/ProdComp/SearchBar.jsx';
// import './Products.scss';

// const Products = () => {
//   const [allProd, SetAllProd] = useState([]);
//   const brands = ['Gucci', 'Adidas']; // Updated brand names to match the ones in the checkboxes

//   const [filters, setFilters] = useState({
//     brand: [],
//     price: { min: 0, max: Infinity },
//     rating: null,
//   });

//   useEffect(() => {
//     const products = [];
//     for (let i = 0; i < 8; i++) {
//       const productName = faker.commerce.productName();
//       const productPrice = faker.commerce.price();
//       const productDescription = faker.commerce.productDescription();
//       const productRating = Math.floor(Math.random() * 5) + 1;
//       const brandName = i % 2 === 0 ? brands[1] : brands[0];
//       const image = images[i]; // Replace this with your image logic

//       products.push({
//         id: i + 1,
//         name: productName,
//         price: parseFloat(productPrice), // Parse price as float for accurate comparison
//         description: productDescription,
//         rating: productRating,
//         brand: brandName,
//         image,
//       });
//     }
//     SetAllProd(products);
//   }, []);

//   const filterProducts = () => {
//     return allProd.filter(product => {
//       const passesBrandFilter = filters.brand.length === 0 || filters.brand.includes(product.brand);
//       const passesPriceFilter =
//         filters.price.min <= product.price && product.price <= filters.price.max;
//       const passesRatingFilter = filters.rating === null || product.rating === filters.rating;

//       return passesBrandFilter && passesPriceFilter && passesRatingFilter;
//     });
//   };

//   const handleBrandFilter = (brand) => {
//     const updatedBrands = [...filters.brand];
//     if (updatedBrands.includes(brand)) {
//       updatedBrands.splice(updatedBrands.indexOf(brand), 1);
//     } else {
//       updatedBrands.push(brand);
//     }
//     setFilters({ ...filters, brand: updatedBrands });
//   };

//   const handlePriceFilter = (min, max) => {
//     setFilters({ ...filters, price: { min, max } });
//   };

//   const handleRatingFilter = (rating) => {
//     setFilters({ ...filters, rating });
//   };

//   return (
//     <div className='productsContainer'>

//       <Search />

//       <div className='inp' onClick={() => handleBrandFilter('Gucci')}>
//         <input type='checkbox' checked={filters.brand.includes('Gucci')} />
//         <span className='cat'>Gucci</span>
//       </div>
//       <div className='inp' onClick={() => handleBrandFilter('Adidas')}>
//         <input type='checkbox' checked={filters.brand.includes('Adidas')} />
//         <span className='cat'>Adidas</span>
//       </div>
//       <div className='inp' onClick={() => handlePriceFilter(0, 500)}>
//         <input type='checkbox' checked={filters.price.min <= 0 && filters.price.max >= 500} />
//         <span className='cat'>Under 500</span>
//       </div>
//       <div className='inp' onClick={() => handlePriceFilter(100, 3000)}>
//         <input type='checkbox' checked={filters.price.min <= 100 && filters.price.max >= 3000} />
//         <span className='cat'>100 to 3000</span>
//       </div>
//       <div>
//         <input type='checkbox' onClick={() => handleRatingFilter(5)} />
//         <Rating className='rating' name='size-small' defaultValue={5} size='small' readOnly />
//       </div>
//       {/* ... (rest of your existing JSX) ... */}
//       <ul className='products'>
//         {filterProducts().map(product => (
//           <ProductCard key={product.id} item={product} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Products;

