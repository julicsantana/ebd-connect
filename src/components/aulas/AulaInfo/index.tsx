import { Typography } from "@material-tailwind/react";
import Aula from "../../../models/Aula";

interface Props {
  aula: Aula;
}

const AulaInfo = (props: Props) => {
  const { aula } = props;
  return (
    <div className="mr-auto">
      <Typography className="font-normal text-xs text-gray-500">
        {aula.data}
      </Typography>
      <Typography className="font-semibold text-sm text-gray-800">
        Lição {aula.licao.numero} - {aula.licao.titulo}
      </Typography>
      <Typography className="font-normal text-xs text-gray-500">
        Professor: {aula.professor}
      </Typography>
    </div>
  );
};

export default AulaInfo;
