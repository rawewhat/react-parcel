import { useEffect, useState } from "react";

function useSample() {
  const [sample, setSample] = useState("");
  useEffect(() => {
    setSample("Sample Used!");
  });
  return sample;
}

export default useSample;
