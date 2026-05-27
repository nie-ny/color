import getRgbaVal from '../get/getRgbaVal';
import { rgbaToHex } from './toHex';
import { rgbaToHsl } from './toHsl';
import { rgbaToRgb } from './toRgb';
import type { IRGBA, IFormat } from '../types/index';

/**
 * 颜色反转
 * @param color 插件支持的颜色格式
 * @param format 颜色返回格式
 * @returns
 */
export default function toInvert(color: string, format?: IFormat): string {
  const rgba: IRGBA = getRgbaVal(color);
  const newRgba: IRGBA = {
    ...rgba,
    red: 255 - rgba.red,
    green: 255 - rgba.green,
    blue: 255 - rgba.blue
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
