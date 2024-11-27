"use client";
import React, { useEffect, useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  HiOutlineBars3,
  HiOutlineChartBarSquare,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";
import { PiSealQuestionThin } from "react-icons/pi";
import { VscFeedback } from "react-icons/vsc";
import { RxAvatar } from "react-icons/rx";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();

  const getActiveRoute = (path: string) => pathname === path;

  const getMenuItemStyle = (isActive: boolean) => ({
    backgroundColor: isActive ? "black" : "transparent",
    color: isActive ? "white" : "#797979",
    borderTopRightRadius: "24px",
    borderBottomRightRadius: "24px",
    marginRight: "16px",
  });

  const getHoverStyle = (isActive: boolean) =>
    isActive
      ? {}
      : {
          backgroundColor: "#f0f0f0",
          marginRight: "16px",
          borderTopRightRadius: "24px",
          borderBottomRightRadius: "24px",
        };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Sidebar collapsed={isCollapsed}>
      <Menu className="bg-white">
        <div className="py-5 px-[28px] justify-between flex gap-5 items-center">
          <HiOutlineBars3
            className="h-6 w-6 text-deeppink cursor-pointer"
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        </div>

        {/* Menu Items */}
        <MenuItem
          icon={<HiOutlineChartBarSquare className="w-5 h-5" />}
          style={getMenuItemStyle(getActiveRoute("/dashboard"))}
          component={<Link href="/dashboard" />}
          onMouseEnter={(e) =>
            Object.assign(
              e.currentTarget.style,
              getHoverStyle(getActiveRoute("/dashboard"))
            )
          }
          onMouseLeave={(e) =>
            Object.assign(
              e.currentTarget.style,
              getMenuItemStyle(getActiveRoute("/dashboard"))
            )
          }
        >
          Dashboard
        </MenuItem>
        <MenuItem
          icon={<RxAvatar className="w-5 h-5" />}
          style={getMenuItemStyle(getActiveRoute("/roles"))}
          component={<Link href="/roles" />}
          onMouseEnter={(e) =>
            Object.assign(
              e.currentTarget.style,
              getHoverStyle(getActiveRoute("/roles"))
            )
          }
          onMouseLeave={(e) =>
            Object.assign(
              e.currentTarget.style,
              getMenuItemStyle(getActiveRoute("/roles"))
            )
          }
        >
          Roles
        </MenuItem>
        <MenuItem
          icon={<RxAvatar className="w-5 h-5" />}
          style={getMenuItemStyle(getActiveRoute("/tenant"))}
          component={<Link href="/tenant" />}
          onMouseEnter={(e) =>
            Object.assign(
              e.currentTarget.style,
              getHoverStyle(getActiveRoute("/tenant"))
            )
          }
          onMouseLeave={(e) =>
            Object.assign(
              e.currentTarget.style,
              getMenuItemStyle(getActiveRoute("/tenant"))
            )
          }
        >
          Tenants
        </MenuItem>
        <MenuItem
          icon={<HiOutlineClipboardDocumentList className="w-5 h-5" />}
          style={getMenuItemStyle(getActiveRoute("/queue_logs"))}
          component={<Link href="/queue_logs" />}
          onMouseEnter={(e) =>
            Object.assign(
              e.currentTarget.style,
              getHoverStyle(getActiveRoute("/queue_logs"))
            )
          }
          onMouseLeave={(e) =>
            Object.assign(
              e.currentTarget.style,
              getMenuItemStyle(getActiveRoute("/queue_logs"))
            )
          }
        >
          Apartment Complex
        </MenuItem>

        <MenuItem
          icon={<VscFeedback className="w-5 h-5" />}
          style={getMenuItemStyle(getActiveRoute("/feedbacks"))}
          component={<Link href="/feedbacks" />}
          onMouseEnter={(e) =>
            Object.assign(
              e.currentTarget.style,
              getHoverStyle(getActiveRoute("/feedbacks"))
            )
          }
          onMouseLeave={(e) =>
            Object.assign(
              e.currentTarget.style,
              getMenuItemStyle(getActiveRoute("/feedbacks"))
            )
          }
        >
          Lease Period
        </MenuItem>

        <MenuItem
          icon={<PiSealQuestionThin className="w-5 h-5" />}
          style={getMenuItemStyle(getActiveRoute("/faqs"))}
          component={<Link href="/faqs" />}
          onMouseEnter={(e) =>
            Object.assign(
              e.currentTarget.style,
              getHoverStyle(getActiveRoute("/faqs"))
            )
          }
          onMouseLeave={(e) =>
            Object.assign(
              e.currentTarget.style,
              getMenuItemStyle(getActiveRoute("/faqs"))
            )
          }
        >
          Maintenance
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
