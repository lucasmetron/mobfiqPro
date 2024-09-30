import { useEffect, useState } from "react";

export default function useDebounce(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]); //como as dependências são value e delay se algum desses 2 mudarem, excluimos o último setTimeOut e fazemos um novo a cada mudança

  return debouncedValue;
}
