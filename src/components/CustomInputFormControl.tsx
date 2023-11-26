import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface Props {
  label: string;
  inputType: "email" | "text" | "number";
}

const CustomInputFormControl = ({ label, inputType }: Props) => {
  return (
    <FormControl isRequired>
      <FormLabel>{label}</FormLabel>
      <Input fontSize="small" type={inputType} placeholder={label} />
    </FormControl>
  );
};

export default CustomInputFormControl;
