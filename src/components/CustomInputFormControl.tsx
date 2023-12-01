import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface Props {
  label: string;
  inputType: "email" | "text" | "number";
  initialValue?: string;
  disabled?: boolean;
}

const CustomInputFormControl = ({
  label,
  inputType,
  initialValue,
  disabled,
}: Props) => {
  return (
    <FormControl isRequired>
      <FormLabel>{label}</FormLabel>
      <Input
        isDisabled={disabled}
        value={initialValue}
        fontSize="small"
        type={inputType}
        placeholder={label}
      />
    </FormControl>
  );
};

export default CustomInputFormControl;
