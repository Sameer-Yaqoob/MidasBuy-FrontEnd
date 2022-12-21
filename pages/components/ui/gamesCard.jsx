import React from 'react';
import { Card, CardBody, CardFooter, Image,Button } from '@chakra-ui/react'




const GameCard = ({image})=> {
    return(
<Card maxW='sm' w="100%" position="relative" >
  <CardBody p={0}>
    <Image
      src={image}
      alt='Green double couch with wooden legs'
      width="100%" heigth="450px"
    /> 
  </CardBody>
  <CardFooter display="flex" bg="base.2"  _hover={{ bg: "base.3", color: "brand.blue" }} justify="center" h="30px">
      <Button variant='link' color='headerText'>
        GO
      </Button>
  </CardFooter>
</Card>
    )
}
export default GameCard;