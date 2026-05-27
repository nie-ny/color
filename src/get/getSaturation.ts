import getRgbaVal from './getRgbaVal';
import rgbToHsl from '../to/rgbToHsl';

/**
 * 获取饱和度值
 * @param color 插件支持的颜色格式
 * @returns 饱和度值 0-100
 */
export default function getSaturation(color: string): number {
  const rgba = getRgbaVal(color);
  const [, s] = rgbToHsl(rgba.red, rgba.green, rgba.blue);
  return s;
}
