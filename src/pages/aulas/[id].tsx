// import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Checkbox,
  Chip,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import turma from "../../utils/turma-sample.json";
import Chamada from "../../models/Chamada";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import PageHeader from "../../components/pageHeader";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Aula from "../../models/Aula";

const TABLE_HEAD = ["Nome", "Presença", "Bíblia", "Itens", "Visitantes"];

export default function ChamadaPage() {
  const router = useRouter();
  const [aula, setAula] = useState<Aula>();

  useEffect(() => {
    const id = router.query.id;
    if (id) {
      const aula = turma.aulas.find((a) => a.id === id);
      setAula(aula);
    }
  }, [router.query.id]);

  return (
    <div className="flex-col">
      <PageHeader title={`Aula - ${aula?.data}`}>
        Você pode marcar a presença dos alunos, quantidade de bíblias,
        visitantes e itens para cada aula.
      </PageHeader>
      <Card className="mt-8">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {aula?.chamada.map((chamada: Chamada, index) => {
              const isLast = index === aula?.chamada.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={chamada.nome}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {chamada.nome}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={chamada.presente ? "presente" : "ausente"}
                        color={chamada.presente ? "green" : "blue-gray"}
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <Checkbox
                      color="green"
                      checked={chamada.biblia}
                      crossOrigin={undefined}
                    />
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {chamada.biblia}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <IconButton
                        size="sm"
                        variant="outlined"
                        className="mr-2 text-blue-400 border-blue-300"
                        // onClick={prev}
                        disabled={chamada.items === 0}
                      >
                        <MinusIcon strokeWidth={1} className="h-4 w-4" />
                      </IconButton>

                      {chamada.items}

                      <IconButton
                        size="sm"
                        variant="outlined"
                        className="ml-2 text-blue-400 border-blue-300"
                        // onClick={next}
                        // disabled={active === 10}
                      >
                        <PlusIcon strokeWidth={1} className="h-4 w-4" />
                      </IconButton>
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <IconButton
                        size="sm"
                        variant="outlined"
                        className="mr-2 text-blue-400 border-blue-300"
                        // onClick={prev}
                        disabled={chamada.visitantes.length === 0}
                      >
                        <MinusIcon strokeWidth={1} className="h-4 w-4" />
                      </IconButton>

                      {chamada.visitantes.length}

                      <IconButton
                        size="sm"
                        variant="outlined"
                        className="ml-2 text-blue-400 border-blue-300"
                        // onClick={next}
                        // disabled={active === 10}
                      >
                        <PlusIcon strokeWidth={1} className="h-4 w-4" />
                      </IconButton>
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
