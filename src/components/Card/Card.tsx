import { useState } from 'react';

import cl from './Card.module.css';

const Card = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={cl.card}>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};

export default Card;
