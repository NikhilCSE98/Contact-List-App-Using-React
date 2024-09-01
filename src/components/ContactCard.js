import React from "react";
import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

const ContactCard = ({ contact, onClick }) => {
  return (
    <div onClick={onClick}>
      <Flex alignItems="center" mb="4" bg="grey" p={3} borderRadius="md" cursor="pointer" _hover={{ bg: "gray.200" }}>
        <Box ml="5" mr="7">
          <box-icon name='user-circle' size="md"></box-icon>
        </Box>
        <Heading size="md" mb="25">{contact.name}</Heading>
      </Flex>
    </div>
  );
};

export default ContactCard;
