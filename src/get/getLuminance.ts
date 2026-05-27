import getRgbaVal from './getRgbaVal';

/**
 * 获取相对亮度（WCAG 2.0 标准）
 * @param color 插件支持的颜色格式
 * @returns 亮度值 0-1
 */
export default function getLuminance(color: string): number {
  const rgba = getRgbaVal(color);
  const r = rgba.red / 255;
  const g = rgba.green / 255;
  const b = rgba.blue / 255;
  const rs = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  const gs = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  const bs = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}
