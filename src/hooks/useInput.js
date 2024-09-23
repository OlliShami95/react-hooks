import { useState } from "react";

export default function useInput(inistalValue) {
  const [value, setValue] = useState(inistalValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
}
