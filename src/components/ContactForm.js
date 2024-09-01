import React, { useState } from 'react';
import { Stack } from '@chakra-ui/react';
import { FormControl,FormLabel,Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

const ContactForm = ({addNewContact,editContact,onClose,selectedContact, isEditing}) => {
  const [name,setName]=useState(selectedContact?.name || "");
  const [phone,setPhone]=useState(selectedContact?.phone || "");
  const onSubmit=()=>{
    if (isEditing) {
      editContact(selectedContact.id, name, phone);
    } else {
      addNewContact(name, phone);
    }
    onClose();
  }
  return (
    <Stack m="15">
    <FormControl id='name'>
      <FormLabel>Name
      </FormLabel>
      <Input h="20" type='text' value={name} onChange={(e)=>{
        setName(e.target.value)}}></Input>
    </FormControl>
    <FormControl id='phone'>
      <FormLabel>Phone No.
      </FormLabel>
      <Input h="20" type='tel' minLength="10" maxLength="12" value={phone} onChange={(e)=>{
        setPhone(e.target.value)
      }}></Input>
    </FormControl>
    <Button onClick={onSubmit} backgroundColor="green" border="1px solid black" w="100px" alignSelf="end" h="30">{isEditing ? "Update" : "Save"}</Button>
    </Stack>
  );
};

export default ContactForm;
