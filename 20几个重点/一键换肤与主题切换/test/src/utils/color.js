import color from 'css-color-function'
import formula from './formula.json'
import {dependencies} from '../../package.json'
import axios from 'axios'
let originalStyle = '';
// 测试匹配规则
// let str = '.el-button--primary{color:#FFF;background-color:primary;border-color:primary}'
// str = str.replace(new RegExp('(\\:s*)' + 'primary', 'g'),'$1'+'123')
// console.log(str)
const colorMap = {
    '#3a8ee6': 'shade-1',
    '#409eff': 'primary',
    '#53a8ff': 'light-1',
    '#66b1ff': 'light-2',
    '#79bbff': 'light-3',
    '#8cc5ff': 'light-4',
    '#a0cfff': 'light-5',
    '#b3d8ff': 'light-6',
    '#c6e2ff': 'light-7',
    '#d9ecff': 'light-8',
    '#ecf5ff': 'light-9'
}
const getElementVersion = ()=> {
    return dependencies["element-ui"].replace('^','');
}
const generateColors = primary => {
    let colors = {primary}

    Object.keys(formula).forEach(key => {
        console.log(key)
        const value = formula[key].replace(/primary/g, primary)
        colors[key] = color.convert(value)
    })
    return colors
}

const writeNewStyle = async(colors, originalStylesheetCount=2) => {
    let cssText = originalStyle|| await getElementCss()
    console.log(cssText)
    Object.keys(colors).forEach(key => {
        console.log(colors[key])
        cssText = cssText.replace(new RegExp('(\\:s*)' + key, 'g'), '$1' + colors[key])
    })
    console.log(cssText)
    if (originalStylesheetCount === document.styleSheets.length) {
        const style = document.createElement('style')
        style.innerText = cssText
        document.head.appendChild(style)
    } else {
        document.head.lastChild.innerText = cssText
    }
}

const getElementCss = async () => {
    const url = `https://unpkg.com/element-ui@${getElementVersion()}/lib/theme-chalk/index.css`
    console.log(url);
    let {data} = await axios.get(url)
    Object.keys(colorMap).forEach(key => {
        const value = colorMap[key]
        data = data.replace(new RegExp(key, 'ig'), value)
    })
    originalStyle = data;
    return originalStyle;
}

export {
    generateColors,
    writeNewStyle,
    getElementCss
}
