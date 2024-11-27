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

interface Role {
  _id: string;
  RoleType: string;
  createdAt: string;
}

const ManageRolesPage = () => {
  const [getAllRoles, setAllRoles] = useState<Role[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    async function GetAllRoles() {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("/role");
        const response = res.data;
        setAllRoles(response.payload);
      } catch (error) {
        console.error("Error fetching roles:", error);
      } finally {
        setIsLoading(false);
      }
    }
    GetAllRoles();
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
                    <TableHead className="w-[100px]">Role ID</TableHead>
                    <TableHead>Role Name</TableHead>
                    <TableHead>CreatedAt</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {getAllRoles.map((role) => (
                    <TableRow key={role._id}>
                      <TableCell className="font-medium">
                        {role._id.slice(0, 5)}
                      </TableCell>
                      <TableCell>{role.RoleType}</TableCell>
                      <TableCell>{role.createdAt}</TableCell>
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

export default ManageRolesPage;
