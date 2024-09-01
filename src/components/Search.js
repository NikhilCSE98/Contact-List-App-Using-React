import React from 'react';
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/input';
import { Search2Icon } from '@chakra-ui/icons';

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Search2Icon color="gray.400" margin="7" marginTop="12" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search Contact..."
        focusBorderColor="teal.500"
        bg="white"
        w="100%"
        paddingLeft="6%"
        height="35"
        size="lg"
        border="1px solid grey"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </InputGroup>
  );
};

export default Search;
