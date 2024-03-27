import "./button.css";

const Button = ({ name, onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
