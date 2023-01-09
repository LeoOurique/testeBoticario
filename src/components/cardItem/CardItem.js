import React from 'react';
import * as C from './styled';

const cardItem = props => {
  return (
    <C.MainContainer>
      {props.item !== undefined ? (
        <>
          <C.ImageBox>
            <img src={props.item.imageObjects[0].large} />{' '}
          </C.ImageBox>
          <C.TextBox>
            <p>{props.item.name}</p>
            <p className="Valor">R$ {props.item.priceSpecification.price.toFixed(2)}</p>
          </C.TextBox>
        </>
      ) : null}
    </C.MainContainer>
  );
};

export default cardItem;
