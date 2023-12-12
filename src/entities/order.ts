interface Order {
  order_id: string;
  customer_id: number;
  order_date: string;
  payment_method: string;
  status: string;
  order_items: OrderItem[];
}
