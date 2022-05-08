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
  Spacer
} from "@chakra-ui/react";


function MessagesSubmit() {
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
      alignItems="right"
      h="100vh"
      w="100vw"
    >
      <Box flex='1' position="absolute" left={50} top={0} h="50%" w="50%">
        <FormControl>
          <FormLabel htmlFor="senderName">Name: </FormLabel>
          <Input id="senderName" type="senderName" />
          <FormLabel htmlFor="senderMail">From: </FormLabel>
          <Input id="senderMail" type="senderMail" />
          <FormLabel htmlFor="receiverMail">To: </FormLabel>
          <Input id="receiverMail" type="receiverMail" />
          <FormLabel htmlFor="messageContent">Message: </FormLabel>
          <Input id="messageContent" type="messageContent" />
          <FormLabel htmlFor="location">Location: </FormLabel>
          <Input id="location" type="location" />
        </FormControl>
        <Spacer />
        <ButtonGroup>
          <Button colorScheme="pink" type="submit" onClick={handleMessageSend}>
            Trimite
          </Button>
        </ButtonGroup>
      </Box>
    </Flex>
  );
}

export default MessagesSubmit;
