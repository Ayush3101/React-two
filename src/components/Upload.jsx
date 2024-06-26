import {Button, Container,HStack,VStack} from '@chakra-ui/react';
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (<Container maxW={"container.x1"} h={"100vh"} p={"16"}>
    <VStack color={"purple.500"} h={"full"} justifyContent={"center"}>
        <AiOutlineCloudUpload size={'10vmax'}/>

         <form>
           <HStack>
            <input
             required type={'file'}
              css={{
                '&:: file-selector-button ' :{
                    border:"none",
                    width:"calc(100% + 36px)",
                    height:"100%",
                    marginLeft:"-18px",
                    color:'purple',
                    backgroundColor:'white' ,
                    cursor:'pointer'

                },

                }}
            
            />
            <Button ColorScheme ={'purple'} type={'submit'}>
                Upload
            </Button>
            </HStack> 
         </form>
    </VStack>
  </Container>
    
  );
};

export default Upload;
