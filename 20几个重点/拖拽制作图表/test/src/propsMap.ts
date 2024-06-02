import { h, VNode } from 'vue';

export interface CommonComponentProps {
  // size
  height: string;
  width: string;
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
  paddingBottom: string;
  // border type
  borderStyle: string;
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  // shadow and opacity
  boxShadow: string;
  opacity: string;
  // position and x,y
  position: string;
  left: string;
  top: string;
  right: string;
}

export interface TextComponentProps extends CommonComponentProps {
  text: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  textDecoration: string;
  lineHeight: string;
  textAlign: string;
  color: string;
  backgroundColor: string;
}

export interface PropToForm {
  component: string;
  subComponent?: string;
  extraProps?: { [key: string]: any };
  text?: string;
  options?: { text: string | VNode; value: any }[];
  initalTransform?: (v: any) => any;
  afterTransform?: (v: any) => any;
  valueProp?: string;
  eventName?: string;
  value?: string;
  events?: { [key: string]: any };
}

export type PropsToForms = {
  [p in keyof TextComponentProps]?: PropToForm
}
const fontFamilyArr = [
  { text: '宋体', value: '"SimSun","STSong"' },
  { text: '黑体', value: '"SimHei","STHeiti"' },
  { text: '楷体', value: '"KaiTi","STKaiTi"' },
  { text: '仿宋', value: '"FangSong,""STFangSong"' },
];
export const commonDefaultProps: CommonComponentProps = {
  // size
  height: '',
  width: '373px',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // border type
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: '1',
  // position and x,y
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0',
};
const fontFamilyOptions = fontFamilyArr.map((font) => ({
  value: font.value,
  text: h('span', { style: { fontFamily: font.value } }, font.text),
}));
const defaultHandler = {
  component: 'a-input',
  eventName: 'change',
  valueProp: 'value',
  intialTransform: (v: any) => v,
  afterTransform: (e: any) => e,
};
const pxToNumberHandler: PropToForm = {
  component: 'a-input-number',
  initalTransform: (v: string) => (v ? parseInt(v, 10) : 0),
  afterTransform: (e: number) => (e ? `${e}px` : ''),
};
export const mapPropsToForms: PropsToForms = {
  text: {
    text: '文本',
    component: 'a-textarea',
    extraProps: { rows: 3 },
    afterTransform: (e: any) => e.target.value,
  },
  fontSize: {
    text: '字号',
    ...pxToNumberHandler,
  },
  lineHeight: {
    text: '行高',
    component: 'a-slider',
    extraProps: { min: 0, max: 3, step: 0.1 },
    initalTransform: (v: string) => parseFloat(v),
    afterTransform: (e: number) => e.toString(),
  },
  textAlign: {
    component: 'a-radio-group',
    subComponent: 'a-radio-button',
    text: '对齐',
    options: [
      { value: 'left', text: '左' },
      { value: 'center', text: '中' },
      { value: 'right', text: '右' },
    ],
    afterTransform: (e: any) => e.target.value,
  },
  fontFamily: {
    component: 'a-select',
    subComponent: 'a-select-option',
    text: '字体',
    options: [
      { value: '', text: '无' },
      ...fontFamilyOptions,
    ],
  },
  fontWeight: {
    component: 'icon-switch',
    initalTransform: (v: string) => v === 'bold',
    afterTransform: (e: boolean) => (e ? 'bold' : 'normal'),
    valueProp: 'checked',
    extraProps: { iconName: 'BoldOutlined', tip: '加粗' },
  },
  fontStyle: {
    component: 'icon-switch',
    initalTransform: (v: string) => v === 'italic',
    afterTransform: (e: boolean) => (e ? 'italic' : 'normal'),
    valueProp: 'checked',
    extraProps: { iconName: 'ItalicOutlined', tip: '斜体' },
  },
  textDecoration: {
    component: 'icon-switch',
    initalTransform: (v: string) => v === 'underline',
    afterTransform: (e: boolean) => (e ? 'underline' : 'none'),
    valueProp: 'checked',
    extraProps: { iconName: 'UnderlineOutlined', tip: '下划线' },
  },
  color: {
    component: 'color-picker',
    text: '字体颜色',
  },
  backgroundColor: {
    component: 'color-picker',
    text: '背景颜色',
  },
  // commonComponentProps - sizes
  width: {
    text: '宽度',
    ...pxToNumberHandler,
  },
  height: {
    text: '高度',
    ...pxToNumberHandler,
  },
  paddingLeft: {
    ...pxToNumberHandler,
    text: '左边距',
  },
  paddingRight: {
    ...pxToNumberHandler,
    text: '右边距',
  },
  paddingTop: {
    ...pxToNumberHandler,
    text: '上边距',
  },
  paddingBottom: {
    ...pxToNumberHandler,
    text: '下边距',
  },
  // commonComponentProps - border type
  borderStyle: {
    ...defaultHandler,
    component: 'a-select',
    subComponent: 'a-select-option',
    text: '边框类型',
    options: [
      { value: 'none', text: '无' },
      { value: 'solid', text: '实线' },
      { value: 'dashed', text: '破折线' },
      { value: 'dotted', text: '点状线' },
    ],
  },
  borderColor: {
    ...defaultHandler,
    component: 'color-picker',
    text: '边框颜色',
  },
  borderWidth: {
    ...pxToNumberHandler,
    component: 'a-slider',
    text: '边框宽度',
    extraProps: { min: 0, max: 20 },
  },
  borderRadius: {
    ...pxToNumberHandler,
    component: 'a-slider',
    text: '边框圆角',
    extraProps: { min: 0, max: 200 },
  },
  // commonComponentProps - opacity and boxShadow
  opacity: {
    component: 'a-slider',
    text: '透明度',
    initalTransform: (v: number) => (v ? v * 100 : 100),
    afterTransform: (e: number) => (e / 100),
    extraProps: { min: 0, max: 100, reverse: true },
  },
  boxShadow: {
    component: 'shadow-picker',
  },
  // commonComponentProps - positions
  left: {
    ...pxToNumberHandler,
    text: 'X轴坐标',
  },
  top: {
    ...pxToNumberHandler,
    text: 'Y轴坐标',
  },
};
