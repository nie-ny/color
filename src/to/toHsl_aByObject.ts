import hslToRgb from './hslToRgb';
import type { IRGBA } from '../types/index';

/**
 * 将 hsl|hsla格式颜色字符串 转换 为具有每种颜色值的对象
 * @param color hsl(0,10%,10%)|hsla(0,10%,10%,0.5)
 * @returns
 */
export default function toHsl_aByObject(color: string = ''): IRGBA {
  let r = 0,
    g = 0,
    b = 0,
    a = 1;
  let arr: Array<number> = [];
  arr = color.match(/\d+/g)?.map(Number) || [];
  // h 色相 s 饱和度 l 亮度
  const [h = 0, s = 0, l = 0] = arr;

  if (s === 0) {
    r = g = b = Math.round(l * 255 / 100);
  } else {
    const tem: Array<number> = hslToRgb(h, s, l);
    r = tem[0];
    g = tem[1];
    b = tem[2];
  }
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

/**
 * hsl 转换 rgb
 * @param h 色相 [0~1]
 * @param s 饱和度 [0~1]
 * @param l 亮度 [0~1]
 * @returns
 */
function hslToRgb2(h: number, s: number, l: number) {
  let r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
function hue2rgb(p: number, q: number, t: number) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
