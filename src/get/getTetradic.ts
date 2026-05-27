import getRgbaVal from './getRgbaVal';
import rgbToHsl from '../to/rgbToHsl';
import hslaToRgb from '../to/hslaToRgb';
import { rgbaToHex } from '../to/toHex';
import type { IRGBA, IFormat } from '../types/index';

/**
 * 获取四角色（正方形，间隔90度）
 * @param color 插件支持的颜色格式
 * @param format 颜色返回格式
 * @returns [原色, 角色1, 角色2, 角色3]
 */
export default function getTetradic(color: string, format?: IFormat): string[] {
  const rgba: IRGBA = getRgbaVal(color);
  const [h, s, l] = rgbToHsl(rgba.red, rgba.green, rgba.blue);

  const h1 = (h + 90) % 360;
  const h2 = (h + 180) % 360;
  const h3 = (h + 270) % 360;

  const [r1, g1, b1] = hslaToRgb(h1, s, l);
  const [r2, g2, b2] = hslaToRgb(h2, s, l);
  const [r3, g3, b3] = hslaToRgb(h3, s, l);

  const rgba1: IRGBA = { ...rgba, red: r1, green: g1, blue: b1 };
  const rgba2: IRGBA = { ...rgba, red: r2, green: g2, blue: b2 };
  const rgba3: IRGBA = { ...rgba, red: r3, green: g3, blue: b3 };

  return [
    formatColor(rgba, format),
    formatColor(rgba1, format),
    formatColor(rgba2, format),
    formatColor(rgba3, format)
  ];
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
