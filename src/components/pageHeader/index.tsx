import { Button } from "@material-tailwind/react";

interface Props {
  title: string;
  children: any;
  buttonTitle?: string;
  onAdd?: () => any;
}

const PageHeader = (props: Props) => {
  return (
    <div className="flex items-center">
      <div className="flex-auto">
        <h1 className="text-gray-900 leading-6 font-semibold text-base">
          {props.title}
        </h1>
        <p className="text-gray-700 leading-5 text-sm mt-2">{props.children}</p>
      </div>
      {props.onAdd ? (
        <div className="ml-16">
          <Button
            onClick={props.onAdd}
            className="font-semibold whitespace-nowrap text-white text-sm leading-5 text-center py-2 px-3 bg-indigo-600 rounded-md cursor-pointer normal-case"
          >
            {props.buttonTitle || "Adicionar"}
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default PageHeader;
