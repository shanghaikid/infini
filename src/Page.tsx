import React, { FC, useState } from 'react';
import './style.css';

const Page: FC = () => {
  const [count, setCount] = useState(0);
  console.log('page 2');
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          const newCount = count + 1;
          setCount(newCount);
        }}
      >
        click on me
      </button>
    </div>
  );
};

export default Page;
