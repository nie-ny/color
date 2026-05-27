import hsvToRgb from './hsvToRgb';
import type { IRGBA } from '../types/index';

/**
 * 将 hsv|hsva格式颜色字符串 转换 为具有每种颜色值的对象
 * @param color hsv(0,10%,10%)|hsva(0,10%,10%,0.5)
 * @returns
 */
export default function toHsv_aByObject(color: string = ''): IRGBA {
  let r = 0,
    g = 0,
    b = 0,
    a = 1;
  let arr: Array<number> = [];
  arr = color.match(/\d+/g)?.map(Number) || [];
  // h 色相 s 饱和度 v 明度
  const [h = 0, s = 0, v = 0] = arr;

  const tem: Array<number> = hsvToRgb(h, s, v);
  r = tem[0];
  g = tem[1];
  b = tem[2];

  const [alphaStr = ''] = color.match(/([0]([.]{1}[0-9]*){1}[\s]*\)|1[\s]*\))/g)?.map(String) || [];
  if (alphaStr) {
    a = Number(alphaStr.substring(0, alphaStr.length - 1).replace(/\s*/g, ''));
  }
  return {
    red: r,
    green: g,
    blue: b,
    alpha: a
  };
}
