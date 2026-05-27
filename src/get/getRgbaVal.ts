import type { IRGBA, IFormat } from '../types/index';
import isValidator from '../is/isValidator';
import toHex_aByObject from '../to/toHex_aByObject';
import toHsl_aByObject from '../to/toHsl_aByObject';
import toRgb_aByObject from '../to/toRgb_aByObject';
import toHsv_aByObject from '../to/toHsv_aByObject';

/**
 * 获取颜色的 Rgba值
 * @param color 插件支持的格式 hex|hexa|rgb|rgba|hsl|hsla|hsv|hsva|关键字
 * @returns
 */
export default function getRgbaVal(color: string): IRGBA {
  const format: any = isValidator(color);
  const lowerColor = color.toLowerCase();
  if (['hex', 'hexa'].includes(format)) return { ...toHex_aByObject(lowerColor), format: format };
  if (['hsl', 'hsla'].includes(format)) return { ...toHsl_aByObject(lowerColor), format: format };
  if (['rgb', 'rgba'].includes(format)) return { ...toRgb_aByObject(lowerColor), format: format };
  if (['hsv', 'hsva'].includes(format)) return { ...toHsv_aByObject(lowerColor), format: format };

  // 关键字 hex格式
  return { ...toHex_aByObject(format), format: 'hex' };
}
