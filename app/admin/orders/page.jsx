"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "../../../lib/api";

const page = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async  () => {
      const data = await axios.get("orders");
      setOrders(data.data);
    };
    fetchOrders();
  }, []);

  console.log(orders);

  return (
    <div>
      <Table>
        <TableCaption>{orders && orders.length>0 ? '' : "A list of recent orders."}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Order ID</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Payment Method</TableHead>
            <TableHead className="text-right">Total Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">#{order.id}</TableCell>
              <TableCell>{order.user?.name ?? "Guest"}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.payment_method}</TableCell>
              <TableCell className="text-right">
                ₹{order.total_amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
