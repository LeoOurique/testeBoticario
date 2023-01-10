import React from 'react';
import { GetItemList } from '../../hooks/GetItemList';
import CardItem from '../../components/cardItem/CardItem';
import Header from '../../components/header/Header';
import * as S from './styled';
import { goToConfirm, goToPayment } from '../../routes/coordinator';
import { useNavigate, useLocation } from 'react-router-dom';
import CardPagamento from '../../components/CardPagamento/CardPagamento';

const Sacola = () => {
  const [list, items] = GetItemList();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(list);
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
            <CardPagamento />
            // <div>
            //   <div>
            //     <label>Número do cartão:</label>
            //     <input
            //       type="number"
            //       id="numerocartao"
            //       nome="numerocartao"
            //       required
            //       minLength={12}
            //       maxLength="12"
            //       size={16}
            //       placeholder="____.____.____-____"
            //     />

            //     <label>Nome do Titular:</label>
            //     <input
            //       type="text"
            //       id="nomecartao"
            //       nome="nomecartao"
            //       placeholder="Como no cartão"
            //       required
            //       minLength={30}
            //       maxLength="30"
            //       size={30}
            //     />
            //   </div>
            //   <div className="validadecvv">
            //     <label>Validade (Mês/ano):</label>
            //     <input type="number"
            //       placeholder="__/____"
            //     />
            //     <label>CVV:</label>
            //     <input type="number"
            //       placeholder="___"
            //     />
            //   </div>
            // </div>
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
        <S.botaoPagamento onClick={() => goToConfirm(navigate)}>
          FINALIZAR O PEDIDO
        </S.botaoPagamento>
      )}
    </S.MainContainer>
  );
};

export default Sacola;
