
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/modal';


const ContactPage=({onOpen,isOpen,onClose,title,children})=> {


  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent spacing={5} maxW="590px" m="auto" mr="28.3%" backgroundColor="white" mt="70" border='1px solid black' p="6">
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton  alignSelf="end" backgroundColor="transparent" border="none" mt="-15"/>
          <ModalBody>{children}
            
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  );
}

export default ContactPage;
