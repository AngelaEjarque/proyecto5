import { ReactNode, useState } from "react";

interface ButtonProps {
  color: string;
  children?: ReactNode;
}

function Button({ color, children }: ButtonProps) {
  const [valor, setValor] = useState(0);

  function sumarValor() {
    const sum: number = valor + 1;
    setValor(sum);
  }

  return (
    <button style={{ background: color }} onClick={sumarValor}>
      {valor}
      {children}
    </button>
  );
}

export default Button;
