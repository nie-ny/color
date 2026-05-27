/**
 * 是否为 Hsv 格式的颜色
 * @param color Hsv格式 hsv(0,10%,10%)|hsv(100 100% 100%)
 * @returns
 */
export default function isHsv(color: string): boolean {
  if (typeof color !== 'string') return false;
  color = color.toLowerCase();

  if (isHsvDef(color)) return true;
  if (isHsvSpace(color)) return true;

  return false;
}

/**
 * 正常格式 验证
 * @param color hsv(0,10%,10%) 格式
 * @returns
 */
export function isHsvDef(color: string): boolean {
  if (
    /^hsv[\(]([\s]*([012]?[0-9][0-9]?|3[0-5][0-9]|360)[\s]*,)([\s]*((0|100|[0-9][0-9]?)%)[\s]*,)([\s]*((0|100|[0-9][0-9]?)%)[\s]*)[\)]$/.test(
      color
    )
  )
    return true;
  return false;
}

/**
 * 空格格式 验证
 * @param color hsv(100 100% 100%) 格式
 * @returns
 */
export function isHsvSpace(color: string): boolean {
  if (
    /^hsv[\(]([\s]*([012]?[0-9][0-9]?|3[0-5][0-9]|360)[\s]*[\s])([\s]*((0|100|[0-9][0-9]?)%)[\s]*[\s])([\s]*((0|100|[0-9][0-9]?)%)[\s]*)[\)]$/.test(
      color
    )
  )
    return true;
  return false;
}
