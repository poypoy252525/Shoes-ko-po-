import { HStack, Button, Text } from "@chakra-ui/react";

interface Props {
  quantity: number;
  onSetQuantity: (quanity: number) => void;
}

const QuantitySelector = ({ onSetQuantity, quantity }: Props) => {
  return (
    <HStack>
      <Button
        size="sm"
        onClick={() => onSetQuantity(quantity - 1)}
        isDisabled={quantity === 1}
      >
        -
      </Button>
      <Text>{quantity}</Text>
      <Button size="sm" onClick={() => onSetQuantity(quantity + 1)}>
        +
      </Button>
    </HStack>
  );
};

export default QuantitySelector;
