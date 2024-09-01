import './App.css';
import { Box, Heading, Stack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { AddIcon} from '@chakra-ui/icons';
import 'boxicons';
import ContactCard from './components/ContactCard';
import { useDisclosure } from '@chakra-ui/hooks';
import ContactPage from './components/ContactPage';
import ContactForm from './components/ContactForm';
import ContactDetails from './components/ContactDetails';
import Search from './components/Search'; 
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const  App=()=> {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const detailsDisclosure = useDisclosure();
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const addNewContact = (name, phone) => {
    if (contacts.findIndex((contact) => contact.phone === phone) === -1) {
      setContacts([...contacts, { name, phone, id: uuidv4() }]);
    }
  };
  

  const editContact = (id, updatedName, updatedPhone) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === id ? { ...contact, name: updatedName, phone: updatedPhone } : contact
      )
    );
    setIsEditing(false);
    onClose();
  };

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    detailsDisclosure.onOpen();
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
    detailsDisclosure.onClose();
  };
  
  const handleEditContact = (contact) => {
    setSelectedContact(contact);
    setIsEditing(true);
    onOpen();
  };
 
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <ContactPage isOpen={isOpen} onOpen={onOpen} onClose={onClose} title={isEditing ? "Edit Contact" : "Add New Contact"}>
        <ContactForm
          addNewContact={addNewContact}
          editContact={editContact}
          onClose={onClose}
          selectedContact={selectedContact}
          isEditing={isEditing}
        />
      </ContactPage>

      <ContactDetails
        isOpen={detailsDisclosure.isOpen}
        onClose={detailsDisclosure.onClose}
        contact={selectedContact}
        onDelete={handleDeleteContact}
        onEdit={handleEditContact}
      />

      <Box minH="100vh" bg="gray.50" p={5}>
        <Heading
          as="h1"
          textTransform="uppercase"
          textAlign="center"
          color="teal.600"
          mb={10}
        >
          Contact List
        </Heading>

        <Stack spacing={5} maxW="600px" m="auto" p="8">
          <Button
            w="100%"
            colorScheme="teal"
            leftIcon={<AddIcon />}
            fontSize={['md', 'lg']}
            p={6}
            _hover={{ bg: "teal.700" }}
            h="40"
            onClick={onOpen}
          >
            Add Contact
          </Button>
           <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </Stack>
        <Box spacing={5} maxW="596px" m="auto" p="4">
          {filteredContacts.map((contact) => (
            <ContactCard
              contact={contact}
              key={contact.id}
              onClick={() => handleContactClick(contact)}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default App;
