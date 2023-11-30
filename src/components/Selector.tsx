import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props {
  items: { label: string; value: string }[];
  selectedValue?: string;
}

const Selector = ({ items, selectedValue = "NaN" }: Props) => {
  const [selectedColor, setSelectedColor] = useState<string>(selectedValue);

  useEffect(() => {
    setSelectedColor(selectedValue);
  }, [selectedValue]);

  return items.map((item, index) => (
    <Button
      key={index}
      variant="outline"
      size="sm"
      isActive={selectedColor === item.value}
      colorScheme={selectedColor === item.value ? "green" : "gray"}
      onClick={() => setSelectedColor(item.value)}
    >
      {item.label}
    </Button>
  ));
};

export default Selector;
