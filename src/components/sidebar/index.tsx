import { Card, Typography, List } from "@material-tailwind/react";
import {
  DocumentDuplicateIcon,
  UserGroupIcon,
  CalendarIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { SidebarItem } from "./SidebarItem";
import { SidebarTeamItem } from "./SidebarTeamItem";

export default function Sidebar() {
  return (
    <Card className="rounded-none h-[calc(100vh)] w-full max-w-[16rem] p-4 shadow-xl shadow-blue-gray-900/1 ">
      <div className="mb-1 flex items-center gap-4 p-2">
        {/* <img src="/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" /> */}
        <Typography variant="h5" color="blue-gray">
          EBD Connect
        </Typography>
      </div>
      <List>
        <SidebarItem title="Dashboard" link="/">
          <HomeIcon className="h-5 w-5" />
        </SidebarItem>
        <SidebarItem title="Aulas" link="/aulas">
          <CalendarIcon className="h-5 w-5" />
        </SidebarItem>
        <SidebarItem title="Turma" link="/turma">
          <UserGroupIcon className="h-5 w-5" />
        </SidebarItem>
        <SidebarItem title="Documentos" link="/documentos">
          <DocumentDuplicateIcon className="h-5 w-5" />
        </SidebarItem>

        <hr className="my-2 border-blue-gray-50" />
        <span className="text-left text-xs font-semibold leading-6 text-gray-400">
          Suas Turmas
        </span>

        <SidebarTeamItem title="Crianças" abrev="C" />
        <SidebarTeamItem title="Adolescentes" abrev="Ad" />
        <SidebarTeamItem title="Jovens 1" abrev="J1" />
        <SidebarTeamItem title="Jovens 2" abrev="J2" />
        <SidebarTeamItem title="Adultos" abrev="A" />
        {/* <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem> */}
      </List>
    </Card>
  );
}
