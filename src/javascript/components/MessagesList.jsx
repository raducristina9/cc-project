import React, { useEffect, useState } from "react";
import { UserIcon } from "@heroicons/react/solid";
import axios from "axios";
import {
  Box,
  Flex,
  Heading,
  VStack,
  StackDivider,
  Spacer,
  Button,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function MessagesList() {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      // const result = await axios.get(`http://localhost:8080/messages`);
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/messages`);

      if (result.data.messages) {
        let messagesArray = result.data.messages;
        messagesArray.reverse();
        setMessages(result.data.messages);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Flex
        position="relative"
        flexDirection="column"
        alignItems="center"
        h="100vh"
        w="100vw"
      >
        <Box position="absolute" pt="30">
          <Heading size="md">Ultimele locatii folosite</Heading>
          <Spacer />
        </Box>
        <Spacer />
        <Box
          position="absolute"
          alignItems="center"
          top={20}
          buttom={20}
          h="100%"
          w="100%"
        >
          {messages.length ? (
            messages.map((message, messageIdx) => (
              <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={4}
                align="stretch"
              >
                  <Box h="40px" bg="pink.200" align="center">
                    {message.location}
                  </Box>
                <Spacer />
              </VStack>
            ))
          ) : (
            <span>Nu exista inca locatii</span>
          )}
          <Center>
          <Button
            colorScheme="pink"
            type="submit"
            onClick={() => {
              navigate("/mailinfo");
            }}
            variant='outline'
          >
            Trimite mail
          </Button>
          </Center>
        </Box>
      </Flex>
    </>
  );
}

export default MessagesList;
