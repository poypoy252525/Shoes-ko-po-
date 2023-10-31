import { Card, CardBody, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  logo: IconType;
}

const BrandCard = ({ logo }: Props) => {
  return (
    <Card
      variant="outline"
      cursor="pointer"
      _hover={{ transform: "scale(1.04)" }}
      transition="0.2s"
    >
      <CardBody>
        <Icon
          as={logo}
          fontSize="220px"
          w="100%"
          color="gray.600"
          _hover={{ color: "gray.800" }}
          transition="0.2s"
        />
      </CardBody>
    </Card>
  );
};

export default BrandCard;
