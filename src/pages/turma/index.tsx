// import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Dialog,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";
import {
  ArchiveBoxIcon,
  BookOpenIcon,
  CheckCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import Aluno from "../../models/Aluno";
import turma from "../../utils/turma-sample.json";
import { useRouter } from "next/router";
import PageHeader from "../../components/pageHeader";

type AlunoInfoProps = {
  aluno: Aluno;
};

type AlunoDetailProps = {
  children: any;
};

const AlunoInfo = (props: AlunoInfoProps) => {
  const { aluno } = props;
  return (
    <div className="mr-auto">
      <Typography className="font-semibold text-sm text-gray-800">
        {aluno.nome}
      </Typography>
      <Typography className="font-normal text-xs text-gray-500">
        Email: {aluno.email}
      </Typography>
      <Typography className="font-normal text-xs text-gray-500">
        Celular: {aluno.celular}
      </Typography>
    </div>
  );
};

const AlunoDetail = (props: AlunoDetailProps) => {
  const { children } = props;
  return <div className="flex items-center w-14 justify-start">{children}</div>;
};

export default function Turma() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selectedAluno, setSelectedAluno] = useState<Aluno>();

  const handleOpen = (aluno: Aluno) => {
    setSelectedAluno(aluno);
    setOpen(!open);
  };

  const onAdd = () => {
    router.push("/turma/novoAluno");
  };

  turma.alunos.sort(function (a, b) {
    const nameA = a.nome.toUpperCase(); // ignore upper and lowercase
    const nameB = b.nome.toUpperCase(); // ignore upper and lowercase
    if (nameA > nameB) {
      return 1;
    }
    if (nameA < nameB) {
      return -1;
    }

    // names must be equal
    return 0;
  });

  const renderAlunosList = () => {
    return turma.alunos.map((aluno, index) => {
      return (
        <div key={index}>
          <ListItem className="pointer-events-none">
            <div className="flex w-full flex-wrap">
              <AlunoInfo aluno={aluno} />
              <div className="flex flex-nowrap lg:w-auto w-full lg:m mt-2">
                <AlunoDetail>
                  <CheckCircleIcon className="w-4 mr-1 text-green-300" />
                  <span className="text-xs align-middle">
                    {((100 * aluno.presenca) / turma.numAulas).toFixed()}%
                  </span>
                </AlunoDetail>
                <AlunoDetail>
                  <BookOpenIcon className="w-4 mr-1 text-blue-300" />
                  <span className="text-xs align-middle">
                    {((100 * aluno.biblia) / aluno.presenca).toFixed()}%
                  </span>
                </AlunoDetail>
                <AlunoDetail>
                  <ArchiveBoxIcon className="w-4 mr-1 text-orange-300" />
                  <span className="text-xs align-middle">{aluno.items}</span>
                </AlunoDetail>
                <AlunoDetail>
                  <UserIcon className="w-4 mr-1 text-purple-300" />
                  <span className="text-xs align-middle">
                    {aluno.visitantes}
                  </span>
                </AlunoDetail>
              </div>
            </div>
          </ListItem>
        </div>
      );
    });
  };

  return (
    <div className="flex-col">
      <PageHeader title="Turma" onAdd={onAdd} buttonTitle="Novo Aluno">
        Lista com todos os alunos cadastrados nessa turma. Você pode adicionar
        novos alunos, atualizar seus dados, visualizar informações ou remover.
      </PageHeader>
      <Card className="mt-8">
        <List className="divide-y">{renderAlunosList()}</List>
      </Card>

      <Dialog open={open && !!selectedAluno} handler={handleOpen}>
        <span>{selectedAluno?.nome}</span>
      </Dialog>
    </div>
  );
}
