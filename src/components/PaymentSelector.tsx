import { Button, HStack, Image } from "@chakra-ui/react";
import { useState } from "react";
import gcashLogo from "../assets/GCash-Logo-PNG_010.png";
import paypalLogo from "../assets/PayPal-Logo-PNG_018.png";
import codLogo from "../assets/—Pngtree—cash on delivery bagde olshop_6359688.png";

const PaymentSelector = () => {
  const [selectedPayment, setSelectedPayment] = useState<string>("gcash");
  const items = [
    { logo: gcashLogo, value: "gcash" },
    { logo: paypalLogo, value: "paypal" },
    { logo: codLogo, value: "cod" },
  ];

  return (
    <HStack spacing={3}>
      {items.map((item, index) => (
        <Button
          key={index}
          variant="outline"
          size="sm"
          isActive={selectedPayment === item.value}
          colorScheme={selectedPayment === item.value ? "green" : "gray"}
          onClick={() => setSelectedPayment(item.value)}
          h="auto"
          p={3}
        >
          <Image maxW="100px" maxH="100px" src={item.logo} />
        </Button>
      ))}
    </HStack>
  );
};

export default PaymentSelector;
