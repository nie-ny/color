import getRgbaVal from '../get/getRgbaVal';
import rgbToHsl from './rgbToHsl';
import hslaToRgb from './hslaToRgb';
import { rgbaToHex } from './toHex';
import { rgbaToHsl } from './toHsl';
import { rgbaToRgb } from './toRgb';
import type { IRGBA, IFormat } from '../types/index';

/**
 * 增加饱和度
 * @param color 插件支持的颜色格式
 * @param percent 饱和度百分比（1-100）
 * @param format 颜色返回格式
 * @returns
 */
export default function toSaturate(color: string, percent: number, format?: IFormat): string {
  if (percent < 0) percent = 0;
  if (percent > 100) percent = 100;
  const rgba: IRGBA = getRgbaVal(color);
  const [h, s, l] = rgbToHsl(rgba.red, rgba.green, rgba.blue);
  let newS = s + percent;
  if (newS > 100) newS = 100;
  const [r, g, b] = hslaToRgb(h, newS, l);
  const newRgba: IRGBA = { ...rgba, red: r, green: g, blue: b };
  return formatColor(newRgba, format);
}

/**
 * 格式化颜色输出
 * @param rgba
 * @param format
 * @returns
 */
function formatColor(rgba: IRGBA, format?: IFormat): string {
  if (format === 'hex') return rgbaToHex(rgba, false);
  if (format === 'hexa') return rgbaToHex(rgba, true);
  if (format === 'hsl') return rgbaToHsl(rgba, false);
  if (format === 'hsla') return rgbaToHsl(rgba, true);
  if (format === 'rgb') return rgbaToRgb(rgba, false);
  if (format === 'rgba') return rgbaToRgb(rgba, true);
  if (rgba.format === 'hex') return rgbaToHex(rgba, false);
  if (rgba.format === 'hexa') return rgbaToHex(rgba, true);
  if (rgba.format === 'hsl') return rgbaToHsl(rgba, false);
  if (rgba.format === 'hsla') return rgbaToHsl(rgba, true);
  if (rgba.format === 'rgb') return rgbaToRgb(rgba, false);
  if (rgba.format === 'rgba') return rgbaToRgb(rgba, true);
  return '';
}
