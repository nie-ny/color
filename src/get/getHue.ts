import getRgbaVal from './getRgbaVal';
import rgbToHsl from '../to/rgbToHsl';

/**
 * 获取色相值
 * @param color 插件支持的颜色格式
 * @returns 色相值 0-360
 */
export default function getHue(color: string): number {
  const rgba = getRgbaVal(color);
  const [h] = rgbToHsl(rgba.red, rgba.green, rgba.blue);
  return h;
}
