import { ListItem, ListItemPrefix } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/router";

export function SidebarItem(props: any) {
  const router = useRouter();
  const { title, link, children } = props;
  return (
    <Link href={link}>
      <ListItem
        className={`text-sm font-semibold p-2 hover:text-indigo-600 active:text-indigo-600 focus:text-indigo-600 hover:bg-gray-50 active:bg-gray-50 focus:bg-gray-50 ${
          router.pathname == link ? "text-indigo-600 bg-gray-50" : ""
        }`}
      >
        <ListItemPrefix className="mr-2">{children}</ListItemPrefix>
        {title}
      </ListItem>
    </Link>
  );
}
