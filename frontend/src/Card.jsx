import React from "react";
import { Box, Button, VStack, Image, Text } from "@chakra-ui/react";

const Card = ({ amount, img, checkoutHandler }) => {
  return (
    <Box
      w="280px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p={4}
      bg="white"
      textAlign="center"
      _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
    >
      <Image src={img} w="100%" h="200px" borderRadius="md"/>

      <VStack spacing={3} mt={3}>
        <Text fontSize="xl" fontWeight="bold" color="gray.700">${amount}</Text>
        <Button colorScheme="teal" onClick={()=>checkoutHandler(amount)}>Buy Now</Button>
      </VStack>

    </Box>
  );
};

export default Card;

// import { Button, VStack, Image,Text } from '@chakra-ui/react';
// import React from 'react';

// const Card = () => {


//   return (
//     // <div>
//       <VStack>
//         <div>
//         <Image src="https://www.itaf.eu/wp-content/uploads/2021/01/xBest-laptops-in-2021-7-things-to-consider-when-buying-a-laptop.jpg.pagespeed.ic.EetT1vcZ6A.webp"/>
//         <Text>5000</Text>
//         <Button>Buy Now</Button>
//         </div>
        
//         <div>
//         <Image width={500} src="https://i0.wp.com/sixcolors.com/wp-content/uploads/2024/10/iphone16-pro-6c.jpg?ssl=1"/>
//         <Text>3000</Text>
//         <Button>Buy Now</Button>
//         </div>

//         <div>
//         <Image width={500} src="https://i0.wp.com/sixcolors.com/wp-content/uploads/2024/10/iphone16-pro-6c.jpg?ssl=1"/>
//         <Text>3000</Text>
//         <Button>Buy Now</Button>
//         </div>
//         <div>
//         <Image width={500} src="https://i0.wp.com/sixcolors.com/wp-content/uploads/2024/10/iphone16-pro-6c.jpg?ssl=1"/>
//         <Text>3000</Text>
//         <Button>Buy Now</Button>
//         </div>
//       </VStack>
//     // {/* </div> */}
//   )
// }

// export default Card;
