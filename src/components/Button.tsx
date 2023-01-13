import "./button.css";

interface ButtonProps {
  text: string;
  style: string;
}

const Button = ({ text, style }: ButtonProps) => {
  return (
    <button className={style}>
      <b>{text}</b>
    </button>
  );
};

export default Button;
