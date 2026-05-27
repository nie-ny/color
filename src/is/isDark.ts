import getLuminance from '../get/getLuminance';

/**
 * 判断颜色是否是暗色
 * @param color 插件支持的颜色格式
 * @param threshold 阈值，默认 0.5
 * @returns
 */
export default function isDark(color: string, threshold: number = 0.5): boolean {
  return getLuminance(color) <= threshold;
}
