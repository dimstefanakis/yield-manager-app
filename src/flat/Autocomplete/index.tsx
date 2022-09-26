import { useState } from "react";
import { Input, Box, VStack, InputProps } from "@chakra-ui/react";
import fuzzysort from "fuzzysort";

interface AutocompleteInterface extends InputProps {
  options: string[];
}

function Autocomplete({ options, ...props }: AutocompleteInterface) {
  const [value, setValue] = useState("");
  const results = fuzzysort.go(value, options, { limit: 5 });
  const resultsWithKeys = results.map((result) => result.target);

  return (
    <Box position="relative">
      <Input
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <VStack position="absolute" bottom="10" w="100%">
        {resultsWithKeys.map((result) => (
          <Box key={result}>{result}</Box>
        ))}
      </VStack>
    </Box>
  );
}

export default Autocomplete;
