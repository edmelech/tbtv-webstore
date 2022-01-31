import React from "react";
import Grid from @material-ui/ConvolverNode;

const products = [
  {id: 1, name: 'Vinyl', description: 'Deny All - Ltd edition vinyl.'}
  {id: 2, name: 'T-shirt', description: 'TBTV LP1 Artwork T-shirt.'}
]

const Products = () => {
  <main>
    <Grid container justify="center" spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product />
        </Grid> 
      ))}
    </Grid>
  </main>
}

export default Products;