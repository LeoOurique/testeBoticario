import React from 'react';
import useForm from '../../hooks/UseForm';
import { MainContainer } from './styled';
import moment from 'moment/moment';

const CardPagamento = () => {
  const { formulario, onChange, limpaInputs, maskcard, maskval } = useForm({
    numerocartao: '',
    nomecartao: '',
    validade: '',
    cvv: 0,
  });
  console.log(formulario);
  const today = new Date()
  const todaymm = today.getMonth() + 1
  const todayaaaa = today.getFullYear()

  function onSubmit(event) {
    event.preventDefault()
    const mesinput = formulario.validade.slice(0, 2)
    const anoinput = formulario.validade.slice(3, 7)
    console.log(mesinput, anoinput);

  }

  return (
    <MainContainer>
      <form onSubmit={onSubmit}>
        <label>Número do cartão:</label>
        <input
          onChange={maskcard}
          // onInput={maskcard}
          type="text"
          id="numerocartao"
          name="numerocartao"
          value={formulario.numerocartao}
          required
          // size={19}
          placeholder="____.____.____-____"
        />
        <label>Nome do Titular:</label>
        <input
          onChange={onChange}
          type="text"
          id="nomecartao"
          name="nomecartao"
          value={formulario.nomecartao}
          placeholder="Como no cartão"
          required
        // minLength={30}
        // maxLength="30"
        // size={30}
        />
        <div className="validadecvv">

          <div className="labelinput">
            <label>Validade (Mês/ano):</label>
            <input
              onChange={maskval}
              type="text"
              placeholder="__/____"
              id="validade"
              name="validade"
              value={formulario.validade}
              required
            />
          </div>
          <div className="labelinput">
            <label>CVV:</label>
            <input
              onChange={onChange}
              type="number"
              placeholder="___"
              id='cvv'
              name='cvv'
              value={formulario.cvv}
              required
            />
          </div>
        </div>
        <button>AFORTEABRACO</button>
      </form>
    </MainContainer>
  );
};

export default CardPagamento;
