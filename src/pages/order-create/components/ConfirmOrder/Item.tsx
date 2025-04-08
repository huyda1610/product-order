type PropsType = {
  label: string;
  value: string | null | undefined;
};

const Item: React.FC<PropsType> = ({ label, value }) => {
  return (
    <div>
      <span className="text-text-secondary inline-block w-32">{label}</span>
      <strong className="text-text">{value ?? "N/A"}</strong>
    </div>
  );
};

export default Item;
