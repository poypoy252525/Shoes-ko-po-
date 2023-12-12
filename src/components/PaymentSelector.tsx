import { Button, HStack, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import gcashLogo from "../assets/GCash-Logo-PNG_010.png";
import paypalLogo from "../assets/PayPal-Logo-PNG_018.png";
import codLogo from "../assets/—Pngtree—cash on delivery bagde olshop_6359688.png";

interface Props {
  setValue: (value: string) => void;
}

const PaymentSelector = ({ setValue }: Props) => {
  const [selectedPayment, setSelectedPayment] = useState<string>("Gcash");
  const items = [
    { logo: gcashLogo, value: "Gcash" },
    { logo: paypalLogo, value: "Paypal" },
    { logo: codLogo, value: "Cash on delivery" },
  ];

  useEffect(() => {
    setValue(selectedPayment);
  }, [selectedPayment]);

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
