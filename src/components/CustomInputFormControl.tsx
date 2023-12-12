import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props {
  label: string;
  inputType: "email" | "text" | "number";
  initialValue?: string;
  disabled?: boolean;
  setValue?: (value: string) => void;
}

const CustomInputFormControl = ({
  label,
  inputType,
  initialValue,
  disabled,
  setValue,
}: Props) => {
  const [inputValue, setInputValue] = useState<string>(initialValue || "");

  useEffect(() => {
    setInputValue(initialValue || "");
  }, [initialValue]);

  useEffect(() => {
    setValue && setValue(inputValue);
    // console.log(inputValue);
  }, [inputValue]);

  return (
    <FormControl isRequired>
      <FormLabel>{label}</FormLabel>
      <Input
        isDisabled={disabled}
        value={inputValue}
        fontSize="small"
        type={inputType}
        placeholder={label}
        onChange={({ target }) => setInputValue(target.value)}
      />
    </FormControl>
  );
};

export default CustomInputFormControl;
