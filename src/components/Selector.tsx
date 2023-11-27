import { Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  items: { label: string; value: string }[];
}

const Selector = ({ items }: Props) => {
  const [selectedColor, setSelectedColor] = useState<string>("");
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
