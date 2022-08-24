import { BiBookContent, BiLineChart, BiSliderAlt } from "react-icons/bi";
import { GiGamepad, GiTabletopPlayers, GiTakeMyMoney } from "react-icons/gi";
import { FaSms } from "react-icons/fa";

export const menuData = {
  contentOptions: [
    {
      link: "/contents/slider-content-list",
      icon: <BiSliderAlt className="text-xl group-hover:text-white" />,
      title: "Slider Content",
    },
    {
      link: "/contents/text-content-list",
      icon: <BiBookContent className="text-xl group-hover:text-white" />,
      title: "Text Content",
    },
    {
      link: "/contents/sms-content-list",
      icon: <FaSms className="text-xl group-hover:text-white" />,
      title: "SMS Content",
    },
  ],
  reportOptions: [
    {
      link: "/all-reports/play-list-report",
      icon: <GiGamepad className="text-xl group-hover:text-white" />,
      title: "Play List Report",
    },
    // {
    //   link: "/contents/text-content-list",
    //   icon: <MdOutlineArticle className="text-xl group-hover:text-white" />,
    //   title: "Game Played (Client)",
    // },
    {
      link: "/all-reports/game-played-user-report",
      icon: <GiTabletopPlayers className="text-xl group-hover:text-white" />,
      title: "Game Played (User)",
    },
    {
      link: "/all-reports/payment-history",
      icon: <GiTakeMyMoney className="text-xl group-hover:text-white" />,
      title: "Payment History",
    },

    {
      link: "/all-reports/complete-report",
      icon: <BiLineChart className="text-xl group-hover:text-white" />,
      title: "Complete Report",
    },
  ],
  usersOptions: [
    {
      link: "/users-menu/newly-registered-users",
      icon: <GiGamepad className="text-xl group-hover:text-white" />,
      title: "New Users in 24 hours",
    },
    {
      link: "/users-menu/all-users-list",
      icon: <GiGamepad className="text-xl group-hover:text-white" />,
      title: "All Users List",
    },
    {
      link: "/users-menu/verify-user",
      icon: <GiTabletopPlayers className="text-xl group-hover:text-white" />,
      title: "Verify User",
    },
    {
      link: "/users-menu/block-unblock-user",
      icon: <GiTakeMyMoney className="text-xl group-hover:text-white" />,
      title: "Block User",
    },

    {
      link: "/users-menu/add-new-user",
      icon: <BiLineChart className="text-xl group-hover:text-white" />,
      title: "Add New User",
    },
  ],
};
