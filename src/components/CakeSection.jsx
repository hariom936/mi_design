import { Button, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
// import cakes from '../images/cake.jpg';
// import cakess from '../images/cakess.jpg';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';


const CakeSection = () => {

  const cakes = [
    { name: "Chocolate", images: "https://cdn.shopify.com/s/files/1/2130/0231/products/C1678_26e17aaf-d90e-467c-b590-600170460610.jpg?v=1670471512&width=1100" },
    { name: "Red Velvet", images: "https://butterry.com/image/cache/catalog/buttery/heart-shaped-red-velvet-cake-cake1095redv-AA-1000x1000.jpeg" },
    { name: "Rose", images: "https://liliyum.com/cdn/shop/products/Anniversarycakewithredrosesontop_2400x.jpg?v=1633333634" },
    { name: "Butter Scotch", images: "https://stylesatlife.com/wp-content/uploads/2022/11/Classic-Butterscotch-Birthday-Cake.jpg.webp" },
    { name: "Strawberry", images: "https://stylesatlife.com/wp-content/uploads/2022/11/Dense-Strawberry-Cake-For-Birthday.jpg.webp" },
    { name: "Mix Fruit", images: "https://faridabadcake.com/wp-content/uploads/2022/05/fresh-pineapple-fruit-cake.jpg"}
  ]
  return (
    <>
      <Typography variant='h4' mt={6} mb={9} pl={40}> So Many Types of Cakes - Order Now  </Typography>
      <Stack direction="row" justifyContent="space-evenly" sx={{flexWrap:"wrap"}} >
        {
          cakes.map(cake => {
            return (
              <>
              <Button>
              <Card sx={{ maxWidth: "200px", mb: 2 }}>
                <CardMedia
                  component='img'
                  height="200"
                  image={cake.images}
                />

                <CardContent>
                  <Typography variant="h5" >
                   {cake.name}
                  </Typography>
                </CardContent>

              </Card>
              </Button>
              </>
            )
          })
        }



      </Stack>


    </>
  )
}

export default CakeSection
