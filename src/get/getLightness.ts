import getRgbaVal from './getRgbaVal';
import rgbToHsl from '../to/rgbToHsl';

/**
 * 获取亮度值
 * @param color 插件支持的颜色格式
 * @returns 亮度值 0-100
 */
export default function getLightness(color: string): number {
  const rgba = getRgbaVal(color);
  const [, , l] = rgbToHsl(rgba.red, rgba.green, rgba.blue);
  return l;
}
