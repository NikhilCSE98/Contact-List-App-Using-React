import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/modal';
import { Button, Box, Text } from '@chakra-ui/react';

const ContactDetails = ({ isOpen, onClose, contact, onDelete,onEdit }) => {
  if (!contact) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="590px" m="auto" backgroundColor="white" mt="70" border='1px solid black' p="6">
        <ModalHeader>Contact Details</ModalHeader>
        <ModalCloseButton  alignSelf="end" backgroundColor="transparent" border="none" mt="-15"/>
        <ModalBody>
          <Box>
            <Text fontWeight="bold">Name:</Text>
            <Text mb={4}>{contact.name}</Text>
            <Text fontWeight="bold">Phone:</Text>
            <Text mb={4}>{contact.phone}</Text>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={()=>onEdit(contact)}>
            Edit
          </Button>
          <Button colorScheme="red" onClick={() => onDelete(contact.id)}>
            Delete
          </Button>
          <Button variant="ghost" onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ContactDetails;
