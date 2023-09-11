import PageHeader from "../../../components/pageHeader";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

type Props = {
  nome: string;
  celular: string;
  email: string;
};

const IdCard = (props: Props) => {
  return (
    <Card className="w-96 h-auto">
      <CardBody className="flex flex-col w-full items-center">
        <Avatar src="/img/avatar.png" alt="avatar" size="xl" />
        <Typography className="font-medium text-gray-900 capitalize mt-3">
          {props.nome}
        </Typography>
        <Typography className="font-normal text-sm text-gray-600 mt-1">
          {props.email}
        </Typography>
        <Typography className="font-normal text-sm text-gray-600 mt-0.5">
          {props.celular}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default function AlunoForm() {
  const [nome, setNome] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="flex-col">
      <PageHeader title="Novo Aluno">
        Preencha as informações abaixo e cadastre um novo aluno na turma.
      </PageHeader>
      <div className="mt-4 flex justify-between items-stretch">
        <IdCard nome={nome} celular={celular} email={email} />
        <form className="ml-16 max-w-screen-lg sm:w-96">
          <div className="flex flex-col gap-4">
            <Input
              size="lg"
              label="Name"
              crossOrigin={undefined}
              value={nome}
              onChange={(input) => setNome(input.target.value)}
            />
            <Input
              size="lg"
              label="Email"
              crossOrigin={undefined}
              value={email}
              type="email"
              onChange={(input) => setEmail(input.target.value)}
            />
            <Input
              size="lg"
              label="Celular"
              crossOrigin={undefined}
              value={celular}
              type="tel"
              onChange={(input) =>
                setCelular(
                  input.target.value.replace(
                    /(\d{2})(\d{1})(\d{4})(\d{4})/,
                    "($1) $2 $3-$4"
                  )
                )
              }
            />
          </div>
          <Button className="mt-6" fullWidth>
            Cadastrar
          </Button>
        </form>
      </div>
    </div>
  );
}
