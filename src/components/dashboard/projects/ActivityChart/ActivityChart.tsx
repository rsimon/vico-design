import { BarChart, Bar, CartesianGrid, XAxis } from 'recharts';

import './ActivityChart.css';

interface ActivityChartProps {

  data: Array<{ date: string, value: number }>;

  height: number;

  width: number;

}

const LINE_STYLE = {
  // --gray-400
  stroke: '#cacaca', 
  strokeWidth: 1
}

const AXIS_STYLE = {
  fontSize: '12px'
}

const tickFormatter = (tick: any) => new Intl.DateTimeFormat('en-GB', {
  month: 'short'
}).format(new Date(tick));

export const ActivityChart = (props: ActivityChartProps) => {

  const { width, height } = props;

  const timeseries = props.data.map(t =>
    ({ timestamp: Date.parse(t.date), value: t.value }));

  return (
    <BarChart 
      width={width} 
      height={height} 
      barCategoryGap={1.5}
      data={timeseries} >

      <CartesianGrid 
        strokeDasharray="3" 
        horizontal={false} />

      <XAxis 
        axisLine={LINE_STYLE} 
        dataKey="timestamp"
        tick={AXIS_STYLE}
        tickSize={4}
        tickCount={6}
        tickLine={LINE_STYLE}
        tickFormatter={tickFormatter}
        height={20} 
        padding={{ left: 5, right: 5 }} />

      <Bar 
        dataKey="value" 
        // --cravensworth-700
        fill="#522b94"/>
    </BarChart>
  )

}