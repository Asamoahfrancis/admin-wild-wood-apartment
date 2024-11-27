"use client";

import React, { useEffect, useState } from "react";
import { Input, Spin } from "antd";
import { CiSearch } from "react-icons/ci";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AddRoleDialog } from "@/components/TenantModal/AddRoleDialog";
import axiosInstance from "@/api/axios/axios-not-auth";
import { LoadingOutlined } from "@ant-design/icons";

interface Tenanttype {
  _id: string;
  TenantFirstName: string;
  TenantMiddleName: string;
  TenantLastName: string;
  TenantEmail: string;
  TenantPhone: string;
  LeasePeriodKey: { LeasePeriodInterval: string };
  createdAt: string;
}

const Tenant = () => {
  const [getAllTenants, setAllTenants] = useState<Tenanttype[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    async function GetAllTenant() {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("/tenants");
        const response = res.data;
        setAllTenants(response.payload);
      } catch (error) {
        console.error("Error fetching roles:", error);
      } finally {
        setIsLoading(false);
      }
    }
    GetAllTenant();
  }, []);

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 64, color: "#EF1C23" }} spin />
  );

  return (
    <div>
      <main>
        <div className="p-5">
          <div className="flex items-center px-4 py-[26px] gap-4">
            <p className="text-[32px] font-[700] text-text_color">
              Manage Roles
            </p>
            <div className="ml-auto">
              <AddRoleDialog />
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
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Spin indicator={antIcon} />
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>First </TableHead>
                    <TableHead>Middle </TableHead>
                    <TableHead>Last </TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>LeasePeriod</TableHead>
                    <TableHead>CreatedAt</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {getAllTenants.map((tenant) => (
                    <TableRow key={tenant._id}>
                      <TableCell className="font-medium">
                        {tenant._id.slice(0, 5)}
                      </TableCell>
                      <TableCell>{tenant.TenantFirstName}</TableCell>
                      <TableCell>{tenant.TenantMiddleName}</TableCell>
                      <TableCell>{tenant.TenantLastName}</TableCell>
                      <TableCell>{tenant.TenantEmail}</TableCell>
                      <TableCell>{tenant.TenantPhone}</TableCell>
                      <TableCell>
                        {tenant.LeasePeriodKey?.LeasePeriodInterval}
                      </TableCell>
                      <TableCell>{tenant.TenantFirstName}</TableCell>
                      <TableCell>{tenant.createdAt}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tenant;
