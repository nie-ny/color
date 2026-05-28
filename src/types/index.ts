// 库 支持的类型
export type IFormat = 'hex' | 'hexa' | 'hsl' | 'hsla' | 'rgb' | 'rgba' | 'hsv' | 'hsva';

/**
 * RGBA 格式 每种颜色值的对象
 */
export interface IRGBA {
  red: number;
  green: number;
  blue: number;
  alpha: number;
  format?: IFormat;
}
