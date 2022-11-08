import React from 'react'
import {Box, Heading} from "@chakra-ui/react";

const Header = ({title}) => {
  return <Box p={4} shadow='md'>
    <Heading> {title} </Heading>
  </Box>
}

export default Header