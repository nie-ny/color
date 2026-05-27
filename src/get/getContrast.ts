import getLuminance from './getLuminance';

/**
 * 计算两个颜色的对比度（WCAG 2.0）
 * @param color1 第一个颜色
 * @param color2 第二个颜色
 * @returns 对比度值，通常 4.5:1 是最低要求
 */
export default function getContrast(color1: string, color2: string): number {
  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}
