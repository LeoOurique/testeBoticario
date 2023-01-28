import React from 'react';
import { useLocation } from 'react-router-dom';
import * as C from './styled';

const CardItem = props => {
  const location = useLocation()
  return (
    <C.MainContainer>
      {props.item !== undefined ? (
        <>
          <C.ImageBox>
            <img src={props.item.imageObjects[0].small} alt="Imagem do produto" />
          </C.ImageBox>
          <C.TextBox>
            <p>{props.item.name}</p>
            {location.pathname === '/confirmacao' ? null
              :
              <p className="Valor">R$ {props.item.priceSpecification.price.toFixed(2)}</p>
            }
          </C.TextBox>
        </>
      ) : null}
    </C.MainContainer>
  );
};

export default CardItem;
