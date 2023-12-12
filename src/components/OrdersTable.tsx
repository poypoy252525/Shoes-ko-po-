import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import useOrders from "../hooks/useOrders";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const OrdersTableTab = () => {
  const user = useAuth();
  if (!user) return <Navigate to="/login" />;
  const { data: orders } = useOrders(user.customer_id);
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>All order records</TableCaption>
        <Thead>
          <Tr>
            <Th>Order</Th>
            <Th>Status</Th>
            <Th>Payment Method</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders?.map((order, index) => (
            <Tr key={index} fontSize="xs" color="teal">
              <Td>#{order.order_id}</Td>
              <Td>{order.status}</Td>
              <Td>{order.payment_method}</Td>
              <Td>{formatOrderDate(order.order_date)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

const formatOrderDate = (orderDateStr: string) => {
  const orderDate = new Date(orderDateStr);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return new Intl.DateTimeFormat(
    "en-US",
    options as Intl.DateTimeFormatOptions
  ).format(orderDate);
};

export default OrdersTableTab;
