import React, { useState } from 'react';
import { GetItemList } from '../../hooks/GetItemList';
import CardItem from '../../components/cardItem/CardItem';
import Header from '../../components/header/Header';
import * as S from './styled';
import { goToConfirm, goToPayment } from '../../routes/coordinator';
import { useNavigate, useLocation } from 'react-router-dom';
import useForm from '../../hooks/UseForm';

const Sacola = () => {
  const [btVerify, setBtVerify] = useState(false);
  const [list, items] = GetItemList();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(list);

  const { formulario, onChange, limpaInputs, maskcard, maskval, maskcvv } = useForm({
    numerocartao: '',
    nomecartao: '',
    validade: '',
    cvv: 0,
  });
  console.log(formulario);
  const today = new Date()
  const todaymm = today.getMonth() + 1
  const todayaaaa = today.getFullYear()

  function enviarDados(event) {
    event.preventDefault()
    const mesinput = formulario.validade.slice(0, 2)
    const anoinput = formulario.validade.slice(3, 7)
    console.log(mesinput, anoinput);

    if (mesinput > 12) {
      alert('Selecione um mês válido')
    }
    else if (anoinput < todayaaaa) {
      alert('Utilize um cartão válido')
    }
    else if (anoinput === todayaaaa && mesinput < todaymm) {
      alert('Utilize um cartão válido')
    }
    else if (anoinput >= todayaaaa && mesinput >= todaymm) {
      setBtVerify(true)
      alert('Cartão válido')
      goToConfirm(navigate)
    }
  }
  console.log(btVerify)

  return (
    <S.MainContainer>
      <Header />
      {location.pathname === '/' ?
        <h3>PRODUTOS</h3>
        :
        <h3>CARTÃO DE CRÉDITO</h3>}
      <S.List>
        {items.length > 0 ? (
          location.pathname === '/' ? (
            items.map(item => {
              return <CardItem key={item.product.sku} item={item.product} />;
            })
          ) : (
            <S.Formulario id='myForm' onSubmit={enviarDados}>
              <label>Número do cartão:</label>
              <input
                onChange={maskcard}
                type="text"
                id="numerocartao"
                name="numerocartao"
                value={formulario.numerocartao}
                required
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
                    onChange={maskcvv}
                    type="number"
                    placeholder="___"
                    id='cvv'
                    name='cvv'
                    value={formulario.cvv}
                    required
                  />
                </div>
              </div>
            </S.Formulario>
          )
        ) : (
          <p>Carregando Itens</p>
        )}
      </S.List>
      <S.Fechamento>
        <div>
          <p>PRODUTOS</p>
          <p>FRETE</p>
          <p className="laranja">DESCONTO</p>
          <p className="bold">TOTAL</p>
        </div>
        {list && list !== undefined ? (
          <div className="valoresFechamento">
            <p>R$ {list && list.subTotal}</p>
            <p>R$ {list.shippingTotal}</p>
            <p className="laranja">- R$ {list.discount}</p>
            <p className="bold">R$ {list.total}</p>
          </div>
        ) : (
          <p>carregando</p>
        )}
      </S.Fechamento>

      {location.pathname === '/' ? (
        <S.botaoPagamento onClick={() => goToPayment(navigate)}>
          SEGUIR PARA O PAGAMENTO
        </S.botaoPagamento>
      ) : (
        btVerify === false ?
          <S.botaoPagamento form='myForm' type='submit'>
            FINALIZAR O PEDIDO
          </S.botaoPagamento> :
          <S.botaoPagamento form='myForm' type='submit' onClick={() => goToConfirm(navigate)}>
            FINALIZAR O PEDIDO
          </S.botaoPagamento>
      )}
    </S.MainContainer>
  );
};

export default Sacola;
