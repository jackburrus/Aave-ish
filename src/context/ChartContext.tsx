import React, { useState } from "react";
import { func } from "../constants/index";

interface Context {
  chartIndex: number;
  setChartIndex: () => void;
}

export const ChartContext = React.createContext<Context>({
  setChartIndex: func.noop,
  chartIndex: 1,
});

export function ChartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [chartIndex, setChartIndex] = useState(1);
  return (
    <ChartContext.Provider value={{ chartIndex, setChartIndex }}>
      {children}
    </ChartContext.Provider>
  );
}
