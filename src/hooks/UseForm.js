import { useState } from "react";

const useForm = (estadoInicial) => {
  const [formulario, setForm] = useState(estadoInicial);
  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...formulario, [name]: value });
  };
  const limpaInputs = () => {
    setForm(estadoInicial);
  };
  const maskcard = (event) => {
    const { name, value } = event.target;
    let nv = value.replace(/\D/g, "")
      .replace(/(\d{4})(\d)/, "$1.$2")
      .replace(/(\d{4})(\d)/, "$1.$2")
      .replace(/(\d{4})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1")
    setForm({ ...formulario, [name]: nv });
  }
  const maskval = (event) => {
    const { name, value } = event.target;
    let nv = value.replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .substring(0, 7)
    setForm({ ...formulario, [name]: nv });
  }
  const maskcvv = (event) => {
    const { name, value } = event.target;
    let nv = value.replace(/\D/g, "")
      .substring(0, 3)
    setForm({ ...formulario, [name]: nv });
  }
  return { formulario, onChange, limpaInputs, maskcard, maskval, maskcvv };
}


export default useForm