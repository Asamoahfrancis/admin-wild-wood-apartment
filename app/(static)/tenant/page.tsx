"use client";
import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { CiSearch } from "react-icons/ci";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AddTenantDialog } from "@/components/TenantModal/AddTenantDialog";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const Tenant = () => {
  const [openSMS, setOpenSMS] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [EditOpen, setEditOpen] = useState<boolean>(false);
  const [role, setRole] = useState<any>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <main>
        <div className="p-5">
          <div className="flex items-center px-4 py-[26px] gap-4">
            <p className="text-[32px] font-[700] text-text_color">
              Tenent Managers
            </p>
            <div className="ml-auto">
              <AddTenantDialog />
            </div>
          </div>
          <div className="bg-white p-4 rounded-[20px] drop-shadow-[0_3px_6px_rgba(121,121,121,0.1)]">
            <section className="flex items-center justify-between">
              <div className="m-3">
                <Input
                  size="large"
                  placeholder="Search"
                  className="rounded-[20px]"
                  suffix={<CiSearch className="text-RedDefault" />}
                />
              </div>
            </section>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">
                      {invoice.invoice}
                    </TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right">
                      {invoice.totalAmount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tenant;
