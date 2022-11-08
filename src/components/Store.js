import React from 'react'
import {Box, Heading,  Button, Input, Tag, SimpleGrid, Image, Center, GridItem, Spinner} from "@chakra-ui/react"
import {useRef, useState, useEffect} from 'react'
import Header from './Header'

const StoreItem = ({title, price, image}) => {
    return (
        <Box p ={4} borderRadius='lg' borderWidth='1px'>
            
                <Center>
                    <Image src={image} w={24}/>
                </Center>
             
              <Heading noOfLines = {2} size='sm' fontWeight='normal'>{title}</Heading>
              
             
            <Tag mt={4}> ${price}</Tag>
        </Box>
    )
    }

function Store ({items, onItemAdd, loading})  {

    const itemNameRef = useRef()
    const itemPriceRef = useRef()

    const [filteredItems, setfilteredItems] = useState(items)

    useEffect( ()=> {
        setfilteredItems(items)
    }, [items])
    
    
    return (
     <Box p={4}>
        <Header title="Store"/>
        {loading ? <Center mt={6}><Spinner/> </Center>:
        <Box p={2}>
            <Input onChange={(e)=> {
                let f = items.filter (item => item.title.toLowerCase().includes(e.target.value.toLocaleLowerCase()))
                setfilteredItems(f)
            }} mt= {4} placeholder="Search"/>
        
        
        <SimpleGrid columns={4} spacing={4} mt={4} p={2}>
        {filteredItems.map((item) => {
            return (
                <GridItem mt={4}>
                    <StoreItem title={item.title} price = {item.price} image = {item.image}/>
                </GridItem>
              
            )
        })}
        </SimpleGrid>
        <Input ref={itemNameRef} mt={10} placeholder='Item name' />
        <Input ref={itemPriceRef} mt={2} placeholder='Price' type='number' />
        <Button mt={2} onClick = { () => {
            onItemAdd({
                title: itemNameRef.current.value, 
                price: itemPriceRef.current.value
                })}}> Add Item</Button>
       </Box>
    }
    </Box>
     )   
}

export default Store