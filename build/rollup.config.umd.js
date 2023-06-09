// import path from 'path';
// 源码与依赖的第三方库进行合并
import resolve from '@rollup/plugin-node-resolve';
// 自动获取 package.json 中的引用库
import externals from 'rollup-plugin-node-externals';
// 支持基于 CommonJS 模块方式 npm 包 编译
// import commonjs from '@rollup/plugin-commonjs';
// 编译 ts文件
import typescript from '@rollup/plugin-typescript';
// 代码中删除 debugger 语句和函数。包括 assert.equal、console.log 等
import strip from '@rollup/plugin-strip';

export default {
  input: 'src/index.ts',
  output: {
    file: './umd/color.umd.js',
    name: 'Color',
    format: 'umd'
  },
  plugins: [
    resolve(),
    externals({
      devDeps: false // devDependencies 类型的依赖就不用加到 externals 了。
    }),
    typescript(),
    strip()
  ],
  // 保持外部引用状态 的 三方库
  external: []
};
