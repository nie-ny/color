import type { IRGBA } from '../types/index';

/**
 * 将 RGB 转换为 HSV/HSB
 * @param r 红色 0-255
 * @param g 绿色 0-255
 * @param b 蓝色 0-255
 * @returns [h, s, v] h: 0-360, s: 0-100, v: 0-100
 */
export default function rgbToHsv(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h = 0;
  const s = max === 0 ? 0 : d / max;
  const v = max;

  if (max !== min) {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(v * 100)];
}
