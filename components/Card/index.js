import React from 'react';
import { Flex, Box } from 'reflexbox';
import css from './styles.module.scss';

function Card(props) {
  return (
    <Flex className={css.container} {...props}>
      {props.children}
    </Flex>
  );
}

export default Card;
