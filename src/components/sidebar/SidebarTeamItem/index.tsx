import { ListItem, ListItemPrefix } from "@material-tailwind/react";

export function SidebarTeamItem(props: any) {
  const { title, abrev } = props;
  return (
    <ListItem className="text-sm p-1 font-medium hover:bg-gray-50 active:bg-gray-50 focus:bg-gray-50">
      <ListItemPrefix>
        <span className="bg-white border-gray-200 text-xs border rounded-lg text-center mr-1 shrink-0 w-6 h-6 leading-6 text-gray-400">
          {abrev}
        </span>
      </ListItemPrefix>
      {title}
    </ListItem>
  );
}
