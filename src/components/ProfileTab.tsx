import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import OrdersTableTab from "./OrdersTable";
import PersonalInfoTab from "./PersonalInfoTab";

const ProfileTab = () => {
  return (
    <Tabs variant="line">
      <TabList color="teal">
        <Tab>
          <Icon as={FaCartShopping} />
          <Text fontSize="sm" ms={2}>
            Orders
          </Text>
        </Tab>
        <Tab>
          <Icon as={FaUser} />
          <Text fontSize="sm" ms={2}>
            Personal Info
          </Text>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <OrdersTableTab />
        </TabPanel>
        <TabPanel>
          <PersonalInfoTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ProfileTab;
