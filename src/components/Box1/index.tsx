import { useRef, useEffect } from 'react';
// @ts-ignore
import { BorderBox1 } from '@jiaminghi/data-view-react';
import * as echarts from 'echarts';
import './index.css';
function Box1() {
    const chartRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const chart = echarts.init(chartRef.current);
            const options = {
                tooltip: {
                    trigger: 'item',
                },
                legend: {
                    top: '5%',
                    left: 'center',
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center',
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 40,
                                fontWeight: 'bold',
                            },
                        },
                        labelLine: {
                            show: false,
                        },
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' },
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
        <div className="box1">
            <BorderBox1>
                <div ref={chartRef} style={{ width: '100%', height: '100%' }}></div>
            </BorderBox1>
        </div>
    );
}

export default Box1;