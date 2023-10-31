import { Card, Image } from "@chakra-ui/react";

interface Props {
  picture: string;
}

const PlayersCard = ({ picture }: Props) => {
  return (
    <Card
      size="lg"
      w="100%"
      h="100%"
      overflow="hidden"
      _hover={{ transform: "scale(0.95)" }}
      transition="0.2s"
      cursor="pointer"
    >
      <Image
        src={picture}
        w="100%"
        h="100%"
        objectFit="cover"
        objectPosition="top center"
      />
    </Card>
  );
};

export default PlayersCard;
