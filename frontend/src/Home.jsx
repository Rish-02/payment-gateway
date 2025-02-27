import React from "react";
import { Box, Stack, Heading, Text, Button, Grid } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import Card from "./Card"; 
import axios from "axios";

const Home = () => {

  const checkoutHandler = async (amount) => {
    // const {data} =await axios.post("http://localhost:4000/api/checkout",{
    //   amount: amount,
    // })
    console.log(window);
  };

  const products = [
    { amount: 5000, img: "https://www.itaf.eu/wp-content/uploads/2021/01/xBest-laptops-in-2021-7-things-to-consider-when-buying-a-laptop.jpg.pagespeed.ic.EetT1vcZ6A.webp" },
    { amount: 3000, img: "https://i0.wp.com/sixcolors.com/wp-content/uploads/2024/10/iphone16-pro-6c.jpg?ssl=1" },
    { amount: 7000, img: "https://www.itaf.eu/wp-content/uploads/2021/01/xBest-laptops-in-2021-7-things-to-consider-when-buying-a-laptop.jpg.pagespeed.ic.EetT1vcZ6A.webp" },
    { amount: 12000, img: "https://i0.wp.com/sixcolors.com/wp-content/uploads/2024/10/iphone16-pro-6c.jpg?ssl=1" }
  ];

  return (
    <Box>
      <Box bgColor="brown" bgSize="cover" bgPosition="center" h="80vh" display="flex" alignItems="center" justifyContent="center" textAlign="center" color="white" p={5}>
        <Stack spacing={6}>
          <Heading size="2xl" fontWeight="bold">
            Discover the Best Tech Deals!
          </Heading>
          <Text fontSize="xl">Explore our wide range of top-notch gadgets and accessories.</Text>
          <Button leftIcon={<FaShoppingCart />} colorScheme="teal" size="lg">
            Shop Now
          </Button>
        </Stack>
      </Box>

      <Box p={10} textAlign="center">
        <Heading size="lg" mb={5}>Items Available</Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={6}>
          {products.map((product, index) => (
            <Card 
              key={index} 
              amount={product.amount} 
              img={product.img} 
              checkoutHandler={() => checkoutHandler(product.amount)}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;





// import React from "react";
// import { Box, Stack, Heading, Text, Button, Image, Grid, GridItem } from "@chakra-ui/react";
// import { FaShoppingCart } from "react-icons/fa";
// import Card from "./Card"; // Ensure the Card component exists

// const Home = () => {
//   const handleChange = () => {
//     console.log("Card clicked or updated!");
//   };

//   return (
//     <Box>
//       {/* Hero Section with Background Image */}
//       <Box
//         bgImage="url('https://source.unsplash.com/1600x900/?technology,laptop')" 
//         bgSize="cover"
//         bgPosition="center"
//         h="80vh"
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//         textAlign="center"
//         color="white"
//         p={5}
//       >
//         <Stack spacing={6}>
//           <Heading size="2xl" fontWeight="bold">
//             Discover the Best Tech Deals!
//           </Heading>
//           <Text fontSize="xl">Explore our wide range of top-notch gadgets and accessories.</Text>
//           <Button leftIcon={<FaShoppingCart />} colorScheme="teal" size="lg">
//             Shop Now
//           </Button>
//         </Stack>
//       </Box>

//       {/* Available Items Section */}
//       <Box p={10} textAlign="center">
//         <Heading size="lg" mb={5}>
//           Items Available
//         </Heading>

//         {/* Product Cards Grid Layout */}
//         <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
//           <GridItem>
//             <Card 
//               // amount={5000} 
//               // img="https://unsplash/.com/photos/white-and-gray-wireless-headphones-Q2uV5TkjNz8" 
//               HandlerChange={handleChange} 
//             />
//           </GridItem>
//           <GridItem>
//             <Card 
//               // amount={7000} 
//               // img="https://source.unsplash.com/300x200/?computer,macbook" 
//               HandlerChange={handleChange} 
//             />
//           </GridItem>
//           <GridItem>
//             <Card 
//               // amount={12000} 
//               // img="https://source.unsplash.com/300x200/?tech,gadgets"
//               HandlerChange={handleChange} 
//             />
//           </GridItem>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default Home;





// import React from 'react';
// import { Box,Stack } from "@chakra-ui/react";
// import Card from './Card';

// // const HandlerChange = () => {

// // }

// const Home = () => {
//   return (
//     <Box>
//       <div>
//         <h1>Items Availab</h1>
//       </div>
//         <Stack direction={"row"}>
//             {/* <Card amount={5000} img={"https://www.itaf.eu/en/best-laptops-in-2021-7-things-to-consider-when-buying-a-laptop/"} HandlerChange={HandlerChange}/> */}
//             <Card />
//         </Stack>
//     </Box>
//   )
// }

// export default Home
