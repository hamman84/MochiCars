
import { TableAdminReservesProps } from "./TableAdminReserves.types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatPrice } from "@/lib/formatPrice";

export default function TableAdminReserves(props: TableAdminReservesProps) {
    const { orders } = props

    const totalAmount = orders.reduce((acc, booking) => {
        return acc + parseFloat(booking.totalPrice)
    }, 0)

  return (
    <Table>
      <TableCaption>All client reserves</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Order Date</TableHead>
          <TableHead>Customer ID</TableHead>
          <TableHead>Car</TableHead>
          <TableHead>Date Start</TableHead>
          <TableHead>Date End</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">
              {new Date(order.createdAt).toLocaleDateString()}
            </TableCell>
            <TableCell className="font-medium max-w-[100px] truncate">
                {order.userId}
            </TableCell>
            <TableCell className="font-medium truncate">
                {order.carName}
            </TableCell>
            <TableCell className="font-medium">
              {new Date(order.orderDate).toLocaleDateString()}
            </TableCell>
            <TableCell className="font-medium">
              {new Date(order.orderEndDate).toLocaleDateString()}
            </TableCell>
            <TableCell className="text-right font-medium">
              {formatPrice(Number(order.totalPrice))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5} className="text-right font-bold">
            Total
          </TableCell>
          <TableCell className="text-right font-bold">
            {formatPrice(Number(totalAmount))}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
