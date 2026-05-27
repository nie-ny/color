import getRgbaVal from '../get/getRgbaVal';
import rgbToHsv from './rgbToHsv';
import type { IRGBA } from '../types/index';

/**
 * 将颜色转换为 hsv/hsva 格式
 * @param color 插件支持的颜色格式
 * @param bol 是否返回 hsva格式
 * @param opacity 设置透明度
 * @returns
 */
export default function toHsv(color: string, bol: boolean = false, opacity?: number): string {
  const rgba: IRGBA = getRgbaVal(color);
  return rgbaToHsv(rgba, bol, opacity);
}

/**
 * 将 RGBA 对象转换为 hsv格式字符串
 * @param rgba
 * @param bol 是否返回 hsva格式
 * @param opacity
 * @returns
 */
export function rgbaToHsv(rgba: IRGBA, bol: boolean = false, opacity?: number): string {
  const [h, s, v] = rgbToHsv(rgba.red, rgba.green, rgba.blue);
  if (!bol) return `hsv(${h}, ${s}%, ${v}%)`;
  return `hsva(${h}, ${s}%, ${v}%, ${typeof opacity === 'number' ? opacity : rgba.alpha})`;
}
