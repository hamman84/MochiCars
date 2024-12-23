import { Calendar, CalendarCog, Car, Heart, LayoutList } from "lucide-react";

export const generalItems = [
  {
    icon: Car,
    label: "Vehicles",
    href: "/dashboard",
  },
  {
    icon: Calendar,
    label: "Vehicles Reserves",
    href: "/dashboard/reserves",
  },
  {
    icon: Heart,
    label: "Favorite Vehicles",
    href: "/dashboard/loved-products",
  },
];

export const adminItems = [
  {
    icon: LayoutList,
    label: "Cars Managment",
    href: "/dashboard/admin/cars-manager",
  },
  {
    icon: CalendarCog,
    label: "All reserves",
    href: "/dashboard/admin/all-reserves",
  },
];