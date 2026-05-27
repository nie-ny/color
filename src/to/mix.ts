import getRgbaVal from '../get/getRgbaVal';
import { rgbaToHex } from './toHex';
import { rgbaToHsl } from './toHsl';
import { rgbaToRgb } from './toRgb';
import type { IRGBA, IFormat } from '../types/index';

/**
 * 混合两个颜色
 * @param color1 第一个颜色
 * @param color2 第二个颜色
 * @param weight 权重 0-1，0 表示完全 color1，1 表示完全 color2
 * @param format 颜色返回格式
 * @returns
 */
export default function mix(color1: string, color2: string, weight: number = 0.5, format?: IFormat): string {
  if (weight < 0) weight = 0;
  if (weight > 1) weight = 1;
  const rgba1: IRGBA = getRgbaVal(color1);
  const rgba2: IRGBA = getRgbaVal(color2);
  const newRgba: IRGBA = {
    red: Math.round(rgba1.red * (1 - weight) + rgba2.red * weight),
    green: Math.round(rgba1.green * (1 - weight) + rgba2.green * weight),
    blue: Math.round(rgba1.blue * (1 - weight) + rgba2.blue * weight),
    alpha: rgba1.alpha * (1 - weight) + rgba2.alpha * weight,
    format: format || rgba1.format
  };
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
