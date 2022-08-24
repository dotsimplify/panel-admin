import { BiHome } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

export const sideBarData = [
  {
    title: "Live Trading",
    icon: (
      <BiHome className="text-lg text-iconColor group-hover:text-botton dark:text-darkmodeFots" />
    ),
    path: "/dashboard",
  },

  {
    title: "Logout",
    icon: (
      <FiLogOut className=" text-lg   text-iconColor group-hover:text-botton dark:text-darkmodeFots" />
    ),
    path: "/logout",
  },
];

export const sideBarData2 = [
  {
    title: "Live Trading",
    icon: (
      <BiHome className="text-lg text-iconColor group-hover:text-botton dark:text-darkmodeFots" />
    ),
    path: "/dashboard",
  },
  {
    title: "Users",
    icon: (
      <BiHome className="text-lg text-iconColor group-hover:text-botton dark:text-darkmodeFots" />
    ),
    path: "/users",
  },

  {
    title: "Logout",
    icon: (
      <FiLogOut className=" text-lg   text-iconColor group-hover:text-botton dark:text-darkmodeFots" />
    ),
    path: "/logout",
  },
];
