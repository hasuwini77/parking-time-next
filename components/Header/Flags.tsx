'use client'

import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User} from "@nextui-org/react";

export default function MyFlags() {
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            alt="swedish-flag"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="swedish" className="h-14 gap-2">
            <p className="font-semibold">Swedish</p>
          </DropdownItem>
          <DropdownItem key="english" className="h-14 gap-2">
            <p className="font-semibold">English</p>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
