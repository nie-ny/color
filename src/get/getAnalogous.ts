import getRgbaVal from './getRgbaVal';
import rgbToHsl from '../to/rgbToHsl';
import hslaToRgb from '../to/hslaToRgb';
import { rgbaToHex } from '../to/toHex';
import type { IRGBA, IFormat } from '../types/index';

/**
 * 获取类似色（左右30度）
 * @param color 插件支持的颜色格式
 * @param angle 角度，默认 30
 * @param format 颜色返回格式
 * @returns [左色, 原色, 右色]
 */
export default function getAnalogous(
  color: string,
  angle: number = 30,
  format?: IFormat
): string[] {
  const rgba: IRGBA = getRgbaVal(color);
  const [h, s, l] = rgbToHsl(rgba.red, rgba.green, rgba.blue);

  const h1 = (h - angle + 360) % 360;
  const h2 = (h + angle) % 360;

  const [r1, g1, b1] = hslaToRgb(h1, s, l);
  const [r2, g2, b2] = hslaToRgb(h2, s, l);

  const rgba1: IRGBA = { ...rgba, red: r1, green: g1, blue: b1 };
  const rgba2: IRGBA = { ...rgba, red: r2, green: g2, blue: b2 };

  return [formatColor(rgba1, format), formatColor(rgba, format), formatColor(rgba2, format)];
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
