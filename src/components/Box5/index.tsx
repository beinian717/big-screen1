import { useRef, useEffect } from 'react';
// @ts-ignore
import { BorderBox1 } from '@jiaminghi/data-view-react';
// @ts-ignore
import * as echarts from 'echarts';
import './index.css';
function Box5() {
    const chartRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const chart = echarts.init(chartRef.current);
            const options = {
                title: {
                    text: 'Stacked Area Chart',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985',
                        },
                    },
                },
                legend: {
                    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
                },
                toolbox: {
                    feature: {
                        saveAsImage: {},
                    },
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                    },
                ],
                series: [
                    {
                        name: 'Email',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series',
                        },
                        data: [120, 132, 101, 134, 90, 230, 210],
                    },
                    {
                        name: 'Union Ads',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series',
                        },
                        data: [220, 182, 191, 234, 290, 330, 310],
                    },
                    {
                        name: 'Video Ads',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series',
                        },
                        data: [150, 232, 201, 154, 190, 330, 410],
                    },
                    {
                        name: 'Direct',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series',
                        },
                        data: [320, 332, 301, 334, 390, 330, 320],
                    },
                    {
                        name: 'Search Engine',
                        type: 'line',
                        stack: 'Total',
                        label: {
                            show: true,
                            position: 'top',
                        },
                        areaStyle: {},
                        emphasis: {
                            focus: 'series',
                        },
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
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
        <div className="box5">
            <BorderBox1>
                <div ref={chartRef} style={{ width: '100%', height: '100%' }}></div>
            </BorderBox1>
        </div>
    );
}

export default Box5;