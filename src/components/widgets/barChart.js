import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip

} from "recharts";
import { ThemeContext } from "../../context/ThemeContext";
function BarHChart() {
  const { theme , toggleTheme } = useContext(ThemeContext);
    const data = [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
          amt: 2400
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 1398,
          amt: 2210
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 9800,
          amt: 2290
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
          amt: 2000
        },
        {
          name: "Page E",
          uv: 1890,
          pv: 4800,
          amt: 2181
        },
        
      ];
     
  return (
    <BarChart
    width={500}
    height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      className={theme}
    >
      
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      
      <Bar dataKey="pv" fill="#A162F7" />
      
    </BarChart>
  )
}

export default BarHChart