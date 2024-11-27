import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FiPlus } from "react-icons/fi";

export function AddRoleDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-RedDefault text-white  flex gap-3 items-center justify-center py-2 px-3 rounded-full cursor-pointer"
        >
          <FiPlus size={"1.6em"} />
          Add Roles
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Roles </DialogTitle>
          <DialogDescription>
            Add Roles to the apartment complex.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div>
            <Label htmlFor="name" className="text-right my-40">
              Role Type
            </Label>
            <Input id="name" className="col-span-3" placeholder="eg:Admin" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
