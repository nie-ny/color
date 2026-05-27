import getRgbaVal from './getRgbaVal';
import rgbToHsl from '../to/rgbToHsl';
import hslaToRgb from '../to/hslaToRgb';
import { rgbaToHex } from '../to/toHex';
import type { IRGBA, IFormat } from '../types/index';

/**
 * 获取单色调色板
 * @param color 插件支持的颜色格式
 * @param count 颜色数量，默认 5
 * @param format 颜色返回格式
 * @returns 颜色数组
 */
export default function getMonochromatic(color: string, count: number = 5, format?: IFormat): string[] {
  const rgba: IRGBA = getRgbaVal(color);
  const [h, s, l] = rgbToHsl(rgba.red, rgba.green, rgba.blue);

  const colors: string[] = [];
  const step = 100 / (count - 1);

  for (let i = 0; i < count; i++) {
    const newL = step * i;
    const [r, g, b] = hslaToRgb(h, s, newL);
    const newRgba: IRGBA = { ...rgba, red: r, green: g, blue: b };
    colors.push(formatColor(newRgba, format));
  }

  return colors;
}

/**
 * 格式化颜色输出
 * @param rgba
 * @param format
 * @returns
 */
function formatColor(rgba: IRGBA, format?: IFormat): string {
  const targetFormat = format || rgba.format || 'hex';
  if (targetFormat === 'hex') return rgbaToHex(rgba, false);
  if (targetFormat === 'hexa') return rgbaToHex(rgba, true);
  return rgbaToHex(rgba, false);
}
