import { useRef, useEffect } from 'react';
// @ts-ignore
import { BorderBox1 } from '@jiaminghi/data-view-react';
import * as echarts from 'echarts';
import './index.css';
function Box3() {
    const chartRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const chart = echarts.init(chartRef.current);
            const options = {
                title: {
                    text: 'Basic Radar Chart',
                },
                legend: {
                    data: ['Allocated Budget', 'Actual Spending'],
                },
                radar: {
                    // shape: 'circle',
                    indicator: [
                        { name: 'Sales', max: 6500 },
                        { name: 'Administration', max: 16000 },
                        { name: 'Information Technology', max: 30000 },
                        { name: 'Customer Support', max: 38000 },
                        { name: 'Development', max: 52000 },
                        { name: 'Marketing', max: 25000 },
                    ],
                },
                series: [
                    {
                        name: 'Budget vs spending',
                        type: 'radar',
                        data: [
                            {
                                value: [4200, 3000, 20000, 35000, 50000, 18000],
                                name: 'Allocated Budget',
                            },
                            {
                                value: [5000, 14000, 28000, 26000, 42000, 21000],
                                name: 'Actual Spending',
                            },
                        ],
                    },
                ],
            };
            // 配置图表选项...
            chart.setOption(options);
            // 清理图表实例
            return () => {
                chart.dispose();
            };
        }
    }, []);
    return (
        <div className="box3">
            <BorderBox1>
                <div ref={chartRef} style={{ width: '100%', height: '100%' }}></div>
            </BorderBox1>
        </div>
    );
}

export default Box3;