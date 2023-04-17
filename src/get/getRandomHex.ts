const digits = '0123456789abcdef';
const { floor, random } = Math;

/**
 * 随机生成 hex 格式颜色
 * @param format 类型
 */
export default function getRandomHex(format?: 'hex' | 'hexa') {
  let code = '#';
  const { floor, random } = Math;
  for (let i = 0; i < (format === 'hexa' ? 8 : 6); i++) {
    code += digits.charAt(floor(random() * 16));
  }

  return code;
}