import { DeleteIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import useDeleteAddToCart from "../hooks/useDeleteAddToCart";

interface Props {
  id: number;
}

const RemoveAddToCartButton = ({ id }: Props) => {
  const { mutate } = useDeleteAddToCart();

  return (
    <IconButton
      colorScheme="red"
      variant="ghost"
      size="sm"
      aria-label="remove"
      icon={<DeleteIcon />}
      onClick={() => mutate(id)}
    />
  );
};

export default RemoveAddToCartButton;
