import React from 'react';
import Test1 from './test1';
import Test2 from './test2';
import Test3 from './test3';

interface Props {
  type: 'TEST1' | 'TEST2' | 'TEST3';
};

const Root: React.FC<Props> = (props: Props) => {

  const type = props.type;

  const components = {
    TEST1: Test1,
    TEST2: Test2,
    TEST3: Test3,
  }

  const Component = components[type];

  return (
    <Component />
  )
}

export default Root
