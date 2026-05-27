import getRgbaVal from '../get/getRgbaVal';
import { rgbaToHex } from './toHex';
import { rgbaToHsl } from './toHsl';
import { rgbaToRgb } from './toRgb';
import type { IRGBA, IFormat } from '../types/index';

/**
 * 颜色灰度化
 * @param color 插件支持的颜色格式
 * @param format 颜色返回格式
 * @returns
 */
export default function toGrayscale(color: string, format?: IFormat): string {
  const rgba: IRGBA = getRgbaVal(color);
  const gray = Math.round(rgba.red * 0.299 + rgba.green * 0.587 + rgba.blue * 0.114);
  const newRgba: IRGBA = { ...rgba, red: gray, green: gray, blue: gray };
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
