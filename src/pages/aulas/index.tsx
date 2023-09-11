// import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Card, List, ListItem } from "@material-tailwind/react";
import {
  ArchiveBoxIcon,
  BookOpenIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import turma from "../../utils/turma-sample.json";
import Chamada from "../../models/Chamada";
import Aula from "../../models/Aula";
import { useRouter } from "next/router";
import AulaDetail from "../../components/aulas/AulaDetail";
import AulaInfo from "../../components/aulas/AulaInfo";
import PageHeader from "../../components/pageHeader";

export default function Aulas() {
  const router = useRouter();

  const onAdd = () => {
    router.push("/aulas/form");
  };

  turma.aulas.sort(function (a, b) {
    const nameA = a.data.toUpperCase(); // ignore upper and lowercase
    const nameB = b.data.toUpperCase(); // ignore upper and lowercase
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

  const getIndicadores = (chamada: Chamada[]) => {
    let totalPresenca = 0;
    let totalBiblias = 0;
    let totalVisitantes = 0;
    let totalItems = 0;
    let totalOferta = 0;

    chamada.forEach((aluno) => {
      if (aluno.presente) totalPresenca++;
      if (aluno.biblia) totalBiblias++;
      if (aluno.visitantes?.length) totalVisitantes += aluno.visitantes.length;
      if (aluno.items) totalItems += aluno.items;
      if (aluno.oferta) totalOferta += aluno.oferta;
    });

    return {
      presenca: `${((totalPresenca * 100) / chamada.length).toFixed()}%`,
      biblias: `${((totalBiblias * 100) / totalPresenca).toFixed()}%`,
      visitantes: totalVisitantes,
      items: totalItems,
      ofertas: totalOferta,
    };
  };

  const openAula = (aula: Aula) => router.push(`/aulas/${aula.id}`);

  const renderAulasList = () => {
    return turma.aulas.map((aula: Aula, index: number) => {
      const indicadores = getIndicadores(aula.chamada);
      return (
        <div key={index}>
          <ListItem onClick={() => openAula(aula)}>
            <div className="flex w-full flex-wrap">
              <AulaInfo aula={aula} />
              <div className="flex flex-nowrap lg:w-auto w-full lg:m mt-2">
                <AulaDetail value={indicadores.presenca}>
                  <CheckCircleIcon className="w-4 mr-1 text-green-300" />
                </AulaDetail>
                <AulaDetail value={indicadores.biblias}>
                  <BookOpenIcon className="w-4 mr-1 text-blue-300" />
                </AulaDetail>
                <AulaDetail value={indicadores.items}>
                  <ArchiveBoxIcon className="w-4 mr-1 text-orange-300" />
                </AulaDetail>
                <AulaDetail value={indicadores.visitantes}>
                  <UserIcon className="w-4 mr-1 text-purple-300" />
                </AulaDetail>
                <AulaDetail value={indicadores.visitantes}>
                  <CurrencyDollarIcon className="w-4 mr-1 text-yellow-400" />
                </AulaDetail>
              </div>
            </div>
          </ListItem>
        </div>
      );
    });
  };
  return (
    <div className="flex-col">
      <PageHeader title="Aulas" onAdd={onAdd} buttonTitle="Nova Aula">
        Aqui estão todas as aulas dessa turma. Você pode adicionar novas aulas,
        atualizar os dados, marcar a presença dos alunos, quantidade de bíblias,
        visitantes e itens para cada aula.
      </PageHeader>
      <Card className="mt-8">
        <List className="divide-y">{renderAulasList()}</List>
      </Card>
    </div>
  );
}
