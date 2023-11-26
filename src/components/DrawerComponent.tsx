import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Box,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  toggler: ReactNode;
  children: ReactNode;
  header?: string;
  placement: any;
}

function DrawerComponent({
  children,
  toggler,
  header,
  placement = "left",
}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <Box onClick={onOpen} ref={btnRef}>
        {toggler}
      </Box>
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{header}</DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerComponent;
