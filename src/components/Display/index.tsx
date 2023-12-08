import "./index.css";

type DisplayProps = {
    text: string,
}

const Display = ({ text }: DisplayProps) => {
  return (
    <div className="container-display">
      <span>{text}</span>
    </div>

  );
};

export default Display;