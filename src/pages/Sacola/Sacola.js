import React from 'react';
import { GetItemList } from '../../hooks/GetItemList';
import CardItem from '../../components/cardItem/CardItem';
import Header from '../../components/header/Header';
import * as S from './styled';

const Sacola = () => {
  const [list, items] = GetItemList();
  console.log(list);
  return (
    <S.MainContainer>
      <Header />
      <h3>PRODUTOS</h3>
      <S.List>
        {items.length > 0 ? (
          items.map(item => {
            return <CardItem key={item.product.sku} item={item.product} />;
          })
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

      <S.botaoPagamento>SEGUIR PARA O PAGAMENTO</S.botaoPagamento>
    </S.MainContainer>
  );
};

export default Sacola;
