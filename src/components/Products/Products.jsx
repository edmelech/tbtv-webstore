import React from "react";
import { Grid }  from '@material-ui/core';

import Product from './Product/Product';

const products = [
  {id: 1, name: 'Vinyl', description: 'Deny All - Ltd edition vinyl.', price: '£20'},
  {id: 2, name: 'T-shirt', description: 'TBTV LP1 Artwork T-shirt.', price: '£10'}
]

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid> 
        ))}
      </Grid>
  </main>
  )
}

export default Products;