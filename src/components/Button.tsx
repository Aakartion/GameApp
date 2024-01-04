interface ButtonProps {
  button: string;
  color?: "primary" | "secondary" | "danger" | "success";
  whenButtonIsClicked: () => void;
}

const Button = ({
  button,
  whenButtonIsClicked,
  color = "success",
}: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={whenButtonIsClicked}>
      {button}
    </button>
  );
};

export default Button;
