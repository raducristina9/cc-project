import React, { useEffect, useState } from 'react';
import { UserIcon } from '@heroicons/react/solid'
import axios from 'axios';
import {
  Box,
  Flex,
  Heading,
  VStack,
  StackDivider,
  Spacer
} from '@chakra-ui/react';

function MessagesList() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                `http://localhost:8080/messages`,
            );

            if (result.data.messages) {
                let messagesArray = result.data.messages;
                messagesArray.reverse();
                setMessages(result.data.messages);
            }
        };

        fetchData();
    }, [])
    
    return (<>
  <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      h='100vh'
      w='100vw'
    >
  <Box position="absolute">
    <Heading size='md'>Mesaje Trimise</Heading>
    <Spacer />
  </Box>
  <Spacer />
      <Box position="absolute" alignItems='center' left={0} top={0} h="90%" w="90%">
                {messages.length ? messages.map((message, messageIdx) => (
       <VStack
       divider={<StackDivider borderColor='gray.200' />}
       spacing={4}
       align='stretch'
     >
       <Box h='40px' bg='pink.200'>
         {message.messageContent}
       </Box>
     </VStack>
                )) :
                    <span>No messages yet</span>
                }

</Box>
    </Flex>
                </>

    );
}

export default MessagesList;