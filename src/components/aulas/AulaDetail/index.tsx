interface Props {
  value: any;
  children: any;
}

const AulaDetail = (props: Props) => {
  const { value, children } = props;
  return (
    <div className="flex items-center w-14 justify-start">
      {children}
      <span className="text-xs align-middle">{value}</span>
    </div>
  );
};

export default AulaDetail;
