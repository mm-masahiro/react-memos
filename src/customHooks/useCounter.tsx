import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount((prevCount): number => prevCount + 1);
  };

  return { current: count, increment: increment };
}
