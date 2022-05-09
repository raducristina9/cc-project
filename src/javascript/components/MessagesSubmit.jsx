import React from "react";
import axios from "axios";
import { DEFAULT_MAIL } from "../utils/constants";
import {
  FormControl,
  FormLabel,
  ButtonGroup,
  Button,
  Input,
  Box,
  Flex,
  Spacer,
  Heading,
  Center
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

function MessagesSubmit() {
    const navigate = useNavigate();
    const handleMessageSend = async (e) => {
    const senderName = document.getElementById("senderName").value;
    const receiverMail = document.getElementById("receiverMail").value;
    const messageContent = document.getElementById("messageContent").value;
    const location = document.getElementById("location").value;

    try {
      let response = await axios.post(`http://localhost:8080/messages/info`, {
        senderName,
        senderMail: DEFAULT_MAIL,
        receiverMail,
        location,
        messageContent,
      });

      if (response.status === 200) {
        alert(`Mesaj trimis`);
      }
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };

  return (
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      h="90vh"
      w="90vw"
      rp="10"
    >
         <Box position="absolute" pt="30">
    <Heading size="md">Trimite mail cu informatiile</Heading>
    <Spacer />
  </Box>
      <Box  position="absolute"
          alignItems="center"
          top={20}
          buttom={20}
          h="80%"
          w="80%">
        <FormControl>
          <FormLabel htmlFor="senderName">Nume: </FormLabel>
          <Input id="senderName" type="senderName" />
          <FormLabel htmlFor="senderMail">Destinatar: </FormLabel>
          <Input id="senderMail" type="senderMail" />
          <FormLabel htmlFor="receiverMail">Catre cine: </FormLabel>
          <Input id="receiverMail" type="receiverMail" />
          <FormLabel htmlFor="messageContent">Mesaj: </FormLabel>
          <Input id="messageContent" type="messageContent" />
          <FormLabel htmlFor="location">Locatie: </FormLabel>
          <Input id="location" type="location" />
        </FormControl>
        <Spacer />
        <Center>
        <ButtonGroup pt="50">
          <Button colorScheme="pink" type="submit" onClick={handleMessageSend}>
            Trimite
          </Button>
          <Button
          colorScheme="pink"
          type="submit"
          onClick={() => {
            navigate("/locationinfo");
          }}
        >
          Afiseaza ultimele locatii
        </Button>
        <Button
          colorScheme="pink"
          type="submit"
          onClick={() => {
            navigate("/");
          }}
        >
         Inapoi la harta
        </Button>
        </ButtonGroup>
        </Center>
      </Box>
    </Flex>
  );
}

export default MessagesSubmit;
