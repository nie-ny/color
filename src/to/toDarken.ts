import getRgbaVal from '../get/getRgbaVal';
import { rgbaToHex } from './toHex';
import { rgbaToHsl } from './toHsl';
import { rgbaToRgb } from './toRgb';
import type { IRGBA, IFormat } from '../types/index';

/**
 * 颜色加深
 * @param color 插件支持的颜色格式 hsl|rgb...
 * @param percent 深度 百分比（1-100）
 * @param format 颜色返回格式
 * @returns
 */
export default function toDarken(color: string, percent: number, format?: IFormat): string {
  if (percent < 0) percent = 0;
  if (percent > 100) percent = 100;
  const rgba: IRGBA = getRgbaVal(color);
  const newRgba: IRGBA = { ...rgba };
  newRgba.red = Math.round(newRgba.red - 2.55 * percent);
  newRgba.green = Math.round(newRgba.green - 2.55 * percent);
  newRgba.blue = Math.round(newRgba.blue - 2.55 * percent);
  newRgba.red = newRgba.red < 0 ? 0 : newRgba.red;
  newRgba.green = newRgba.green < 0 ? 0 : newRgba.green;
  newRgba.blue = newRgba.blue < 0 ? 0 : newRgba.blue;

  // 自定义样式
  if (format === 'hex') return rgbaToHex(newRgba, false);
  if (format === 'hexa') return rgbaToHex(newRgba, true);
  if (format === 'hsl') return rgbaToHsl(newRgba, false);
  if (format === 'hsla') return rgbaToHsl(newRgba, true);
  if (format === 'rgb') return rgbaToRgb(newRgba, false);
  if (format === 'rgba') return rgbaToRgb(newRgba, true);
  // 原有样式
  if (newRgba.format === 'hex') return rgbaToHex(newRgba, false);
  if (newRgba.format === 'hexa') return rgbaToHex(newRgba, true);
  if (newRgba.format === 'hsl') return rgbaToHsl(newRgba, false);
  if (newRgba.format === 'hsla') return rgbaToHsl(newRgba, true);
  if (newRgba.format === 'rgb') return rgbaToRgb(newRgba, false);
  if (newRgba.format === 'rgba') return rgbaToRgb(newRgba, true);

  return '';
}
