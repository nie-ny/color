import isHex from './isHex';
import isHexa from './isHexa';
import isRgb from './isRgb';
import isRgba from './isRgba';
import isHsl from './isHsl';
import isHsla from './isHsla';
import isHsv from './isHsv';
import isHsva from './isHsva';
import getColorByKeyword from '../get/getColorByKeyword';

/**
 * 是否为 插件支持颜色
 * @param color 各种颜色类型的字符串
 * @returns
 */
export default function isColor(color: string): boolean {
  if (isHex(color)) return true;
  if (isHexa(color)) return true;
  if (isRgb(color)) return true;
  if (isRgba(color)) return true;
  if (isHsl(color)) return true;
  if (isHsla(color)) return true;
  if (isHsv(color)) return true;
  if (isHsva(color)) return true;

  const keywordColor = getColorByKeyword(color as any);
  if (keywordColor) return true;

  return false;
}
