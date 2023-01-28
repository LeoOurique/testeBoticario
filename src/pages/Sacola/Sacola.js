import React, { useState } from 'react';
import { GetItemList } from '../../hooks/GetItemList';
import CardItem from '../../components/cardItem/CardItem';
import Header from '../../components/header/Header';
import * as S from './styled';
import { goToConfirm, goToPayment } from '../../routes/coordinator';
import { useNavigate, useLocation } from 'react-router-dom';
import useForm from './UseForm';
import { CheckCircle } from 'phosphor-react';
import swal from 'sweetalert';

const Sacola = () => {
  const [btVerify, setBtVerify] = useState(false);
  const [list, items] = GetItemList();
  const navigate = useNavigate();
  const location = useLocation();

  const { formulario, onChange, maskcard, maskval, maskcvv } =
    useForm({
      numerocartao: '',
      nomecartao: '',
      validade: '',
      cvv: '',
    });
  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayYear = today.getFullYear();


  function enviarDados(event) {
    event.preventDefault();
    const mesinput = formulario.validade.slice(0, 2);
    const anoinput = formulario.validade.slice(3, 7);

    if (mesinput > 12) {
      swal("Erro Validação", "Selecione um mês valido", "error");
    } else if (anoinput < todayYear) {
      swal("Erro Validação", "Selecione um ano valido", "error");
    } else if (anoinput === todayYear && mesinput < todayMonth) {
      swal("Cartão Expirado", "Selecione um cartão valido", "error");
    } else if (anoinput >= todayYear && mesinput >= todayMonth) {
      setBtVerify(true);
      swal("Cartão valido!", "", "success");
      goToConfirm(navigate);
    }
  }
  const cartaoMascarado =
    '****.****.****.' + formulario.numerocartao.substr(-4);


  return (
    <S.MainContainer>
      <Header />
      {location.pathname === '/' ? (
        <h3>PRODUTOS</h3>
      ) : location.pathname === '/confirmacao' ? (
        <S.TopoConfirmacao>
          <div className="sucessoCompra">
            <CheckCircle className="logoConfirmacao" size={60} />
            <p>COMPRA EFETUADA COM SUCESSO</p>
          </div>
          <h3>PAGAMENTO</h3>
        </S.TopoConfirmacao>
      ) : (
        <h3>CARTÃO DE CRÉDITO</h3>
      )}
      <S.List>
        {items.length > 0 ? (
          location.pathname === '/' ? (
            items.map(item => {
              return <CardItem key={item.product.sku} item={item.product} />;
            })
          ) : location.pathname === '/confirmacao' ? (
            <S.DadosPagamento>
              <p>{cartaoMascarado}</p>
              <p>{formulario.nomecartao}</p>
              <p>{formulario.validade}</p>
            </S.DadosPagamento>
          ) : (
            <S.Formulario id="myForm" onSubmit={enviarDados} >
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
                    type="text"
                    placeholder="___"
                    id="cvv"
                    name="cvv"
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

      {location.pathname === '/confirmacao' ? (
        <div>
          <h3>PRODUTOS</h3>
          <div className="conteudoconfirmacao">
            {items.map(item => {
              return <CardItem key={item.product.sku} item={item.product} />;
            })}{' '}
          </div>
        </div>
      ) : null}

      <S.Fechamento>
        <div>
          <p>PRODUTOS</p>
          <p>FRETE</p>
          <p className="laranja">DESCONTO</p>
          <p className="bold">TOTAL</p>
        </div>
        {list && list.subTotal !== undefined ? (
          <div className="valoresFechamento">
            <p>R$ {list && list.subTotal.toFixed(2)}</p>
            <p>R$ {list.shippingTotal.toFixed(2)}</p>
            <p className="laranja">- R$ {list.discount.toFixed(2)}</p>
            <p className="bold">R$ {list.total.toFixed(2)}</p>
          </div>
        ) : (
          <p>carregando</p>
        )}
      </S.Fechamento>

      {location.pathname === '/' ? (
        <S.botaoPagamento onClick={() => goToPayment(navigate)}>
          SEGUIR PARA O PAGAMENTO
        </S.botaoPagamento>
      ) : location.pathname === '/confirmacao' ? null : btVerify === false ? (
        <S.botaoPagamento
          form="myForm"
          type="submit">

          FINALIZAR O PEDIDO
        </S.botaoPagamento>
      ) : (
        <S.botaoPagamento
          form="myForm"
          type="submit"
          onClick={() => goToConfirm(navigate)}
        >
          FINALIZAR O PEDIDO
        </S.botaoPagamento>
      )}
    </S.MainContainer>
  );
};

export default Sacola;
