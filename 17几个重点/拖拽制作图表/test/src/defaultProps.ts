export type CommonComponentProps = {
  // size
  height: string;
  width: string;
  // border type
  borderStyle: string;
  borderColor: string;
  borderWidth: string;
  // position and x,y
  position: string;
  left: string;
  top: string;
}
export type containerDefaultProps = Partial<CommonComponentProps>;
export type chartsDefaultProps = {
  id: string,
  type: string,
  option: any
}
export interface defaultProps {
  [key: string]: any
  container: CommonComponentProps
  charts: chartsDefaultProps
}
export interface EditorProps {
  // 供中间编辑器渲染的数组
  components: defaultProps[];
  currentId: string,
  copiedComponent: defaultProps|null;
}
export interface GlobalDataProps {
  editor: EditorProps;
}
// 饼图
export const Pie:defaultProps = {
  container: {
    top: '10px',
    left: '10px',
    width: '200px',
    height: '200px',
    borderColor: '#000000',
    borderWidth: '1px',
    borderStyle: 'solid',
    position: 'absolute',
  },
  charts: {
    id: 'main',
    type: 'Pie',
    option: {
      title: {
        text: '饼图',
      },
      series: [
        {
          type: 'pie',
          data: [
            {
              value: 335,
              name: '直接访问',
            },
            {
              value: 234,
              name: '联盟广告',
            },
            {
              value: 1548,
              name: '搜索引擎',
            },
          ],
        },
      ],
    },
  },
};
// 折线图
export const Line:defaultProps = {
  container: {
    top: '10px',
    left: '10px',
    width: '200px',
    height: '200px',
    borderColor: '#000000',
    borderWidth: '1px',
    borderStyle: 'solid',
    position: 'absolute',
  },
  charts: {
    id: 'main',
    type: 'Line',
    option: {
      title: {
        text: '折线图',
      },
      xAxis: {
        data: [{
          value: '12-3',
        }, {
          value: '12-4',
        }, {
          value: '12-5',
        }, {
          value: '12-6',
        }, {
          value: '12-7',
        }, {
          value: '12-8',
        }],
      },
      yAxis: {},
      series: [{
        name: '用户量',
        type: 'line',
        data: [{
          value: 5,
        }, {
          value: 20,
        }, {
          value: 35,
        }, {
          value: 45,
        }, {
          value: 21,
        }, {
          value: 5,
        }],
      }],
    },
  },
};
// 柱状图
export const Histogram:defaultProps = {
  container: {
    top: '10px',
    left: '10px',
    width: '200px',
    height: '200px',
    borderColor: '#000000',
    borderWidth: '1px',
    borderStyle: 'solid',
    position: 'absolute',
  },
  charts: {
    id: 'main',
    type: 'Histogram',
    option: {
      title: {
        text: '柱状图',
      },
      xAxis: {
        data: [{
          value: 'Mon',
        }, {
          value: 'Tue',
        }, {
          value: 'Wed',
        }, {
          value: 'Thu',
        }, {
          value: 'Fri',
        }, {
          value: 'Sat',
        }, {
          value: 'Sun',
        }],
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: [{
            value: 23,
          }, {
            value: 24,
          }, {
            value: 25,
          }, {
            value: 26,
          }, {
            value: 27,
          }, {
            value: 28,
          }, {
            value: 25,
          }],
        },
      ],
    },
  },
};
// 散点图
export const ScatterPlot:defaultProps = {
  container: {
    top: '10px',
    left: '10px',
    width: '200px',
    height: '200px',
    borderColor: '#000000',
    borderWidth: '1px',
    borderStyle: 'solid',
    position: 'absolute',
  },
  charts: {
    id: 'main',
    type: 'ScatterPlot',
    option: {
      title: {
        text: '散点图',
      },
      xAxis: {},
      yAxis: {},
      series: [
        {
          symbolSize: 9,
          data: [{
            value: [10.0, 8.04],
          }, {
            value: [8.07, 6.95],
          }, {
            value: [9.05, 8.81],
          }, {
            value: [13.0, 7.58],
          }, {
            value: [11.0, 8.33],
          }, {
            value: [14.0, 7.66],
          }, {
            value: [13.4, 6.81],
          }, {
            value: [10.0, 6.33],
          }, {
            value: [14.0, 8.96],
          }],
          type: 'scatter',
        },
      ],
    },
  },
};
// 仪表盘
export const Dashboard:defaultProps = {
  container: {
    top: '10px',
    left: '10px',
    width: '200px',
    height: '200px',
    borderColor: '#000000',
    borderWidth: '1px',
    borderStyle: 'solid',
    position: 'absolute',
  },
  charts: {
    id: 'main',
    type: 'Dashboard',
    option: {
      title: {
        text: '仪表盘',
      },
      series: [
        {
          name: 'Pressure',
          type: 'gauge',
          data: [
            {
              value: 50,
              name: 'SCORE',
            },
          ],
        },
      ],
    },
  },
};
// 雷达图
export const Radar:defaultProps = {
  container: {
    top: '10px',
    left: '10px',
    width: '200px',
    height: '200px',
    borderColor: '#000000',
    borderWidth: '1px',
    borderStyle: 'solid',
    position: 'absolute',
  },
  charts: {
    id: 'main',
    type: 'Radar',
    option: {
      title: {
        text: '雷达图',
      },
      legend: {
        data: [{
          name: 'Allocated Budget',
        }, {
          name: 'Actual Spending',
        }],
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
    },
  },
};
