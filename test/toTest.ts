/// <reference types="mocha" />
/// <reference types="node" />
import assert from 'assert';
import toRgb_aByObject from '../src/to/toRgb_aByObject';
import toHex_aByObject from '../src/to/toHex_aByObject';
import toHsl_aByObject from '../src/to/toHsl_aByObject';
import toRgb from '../src/to/toRgb';
import toHex from '../src/to/toHex';
import toHsl from '../src/to/toHsl';
import toDarken from '../src/to/toDarken';
import toLighten from '../src/to/toLighten';
import toSaturate from '../src/to/toSaturate';
import toDesaturate from '../src/to/toDesaturate';
import toRotateHue from '../src/to/toRotateHue';
import toInvert from '../src/to/toInvert';
import adjustAlpha from '../src/to/adjustAlpha';
import mix from '../src/to/mix';
import toGrayscale from '../src/to/toGrayscale';
import toComplement from '../src/to/toComplement';
import toHsv from '../src/to/toHsv';
import toHsv_aByObject from '../src/to/toHsv_aByObject';

describe('toRgb_aByObject', function () {
  it(`toRgb_aByObject('rgb(1,1,1)')`, () => {
    assert.deepStrictEqual(toRgb_aByObject('rgb(1 , 1 , 1 )'), {
      red: 1,
      green: 1,
      blue: 1,
      alpha: 1
    });
  });
  it(`toRgb_aByObject('rgb(10 10 1)')`, () => {
    assert.deepStrictEqual(toRgb_aByObject('rgb(10  10  1 )'), {
      red: 10,
      green: 10,
      blue: 1,
      alpha: 1
    });
  });
  it(`toRgb_aByObject('rgba(10,10,1, 0.12 )')`, () => {
    assert.deepStrictEqual(toRgb_aByObject('rgba(10,10,1, 0.12 )'), {
      red: 10,
      green: 10,
      blue: 1,
      alpha: 0.12
    });
  });
});

describe('toHex_aByObject', function () {
  it(`toHex_aByObject('#333')`, () => {
    assert.deepStrictEqual(toHex_aByObject('#333'), {
      red: 51,
      green: 51,
      blue: 51,
      alpha: 1
    });
  });
  it(`toHex_aByObject('#ffffff')`, () => {
    assert.deepStrictEqual(toHex_aByObject('#ffffff'), {
      red: 255,
      green: 255,
      blue: 255,
      alpha: 1
    });
  });
  it(`toHex_aByObject('#ffffff00')`, () => {
    assert.deepStrictEqual(toHex_aByObject('#ffffff00'), {
      red: 255,
      green: 255,
      blue: 255,
      alpha: 0
    });
  });
  it(`toHex_aByObject('#fff1')`, () => {
    assert.deepStrictEqual(toHex_aByObject('#fff1'), {
      red: 255,
      green: 255,
      blue: 255,
      alpha: 0.1
    });
  });
});

describe('toHsl_aByObject', function () {
  it(`toHsl_aByObject('hsla(36,50%,50%,0.5)')`, () => {
    assert.deepStrictEqual(toHsl_aByObject('hsla(36,50%,50%,0.5)'), {
      red: 191,
      green: 140,
      blue: 63,
      alpha: 0.5
    });
  });

  it(`toHsl_aByObject('hsla(360, 50%, 50%, 1)')`, () => {
    assert.deepStrictEqual(toHsl_aByObject('hsla(360,50%,50%, 1)'), {
      red: 191,
      green: 63,
      blue: 63,
      alpha: 1
    });
  });

  it(`toHsl_aByObject('hsl(200, 50%, 50%')`, () => {
    assert.deepStrictEqual(toHsl_aByObject('hsl(200, 50%, 50%)'), {
      red: 63,
      green: 148,
      blue: 191,
      alpha: 1
    });
  });
});

describe('toRgb', function () {
  it(`toRgb('#70557C')`, () => {
    assert.strictEqual(toRgb('#70557C'), 'rgb(112, 85, 124)');
  });
  it(`toRgb('red', true)`, () => {
    assert.strictEqual(toRgb('red', true), 'rgba(255, 0, 0, 1)');
  });
  it(`toRgb('hsl(228, 56%, 19%)', true, 0.5)`, () => {
    assert.strictEqual(toRgb('hsl(228, 56%, 19%)', true, 0.5), 'rgba(21, 32, 75, 0.5)');
  });
  it(`toRgb('#70557C00', true)`, () => {
    assert.strictEqual(toRgb('#70557C00', true), 'rgba(112, 85, 124, 0)');
  });
});

describe('toHex', function () {
  it(`toHex('rgb(112, 85, 124)')`, () => {
    assert.strictEqual(toHex('rgb(112, 85, 124)'), '#70557c');
  });
  it(`toHex('hsv(0, 100%, 100%)')`, () => {
    assert.strictEqual(toHex('hsv(0, 100%, 100%)'), '#ff0000');
  });
  it(`toHex('rgba(112, 85, 124, 0.5)')`, () => {
    assert.strictEqual(toHex('rgba(112, 85, 124, 0.5)', true), '#70557c7f');
  });
  it(`toHex('red', true)`, () => {
    assert.strictEqual(toHex('red', true, 0), '#ff000000');
  });
  it(`toHex('red')`, () => {
    assert.strictEqual(toHex('red'), '#ff0000');
  });
  it(`toHex('hsl(228, 56%, 19%)', true)`, () => {
    assert.strictEqual(toHex('hsl(228, 56%, 19%)', true, 0.5), '#15204b7f');
  });
  it(`toHex('hsl(228, 56%, 19%)', true)`, () => {
    assert.strictEqual(toHex('hsla(228, 56%, 19%, 0.5)', true), '#15204b7f');
  });
});

describe('toHsl', function () {
  it(`toHsl('rgb(112, 85, 124)')`, () => {
    assert.strictEqual(toHsl('rgb(112, 85, 124)'), 'hsl(282, 19%, 41%)');
  });
  it(`toHsl('rgba(112, 85, 124, 0.5)')`, () => {
    assert.strictEqual(toHsl('rgba(112, 85, 124, 0.5)', true), 'hsla(282, 19%, 41%, 0.5)');
  });
  it(`toHsl('red', true)`, () => {
    assert.strictEqual(toHsl('red', true), 'hsla(0, 100%, 50%, 1)');
  });
  it(`toHsl('red')`, () => {
    assert.strictEqual(toHsl('red'), 'hsl(0, 100%, 50%)');
  });
  it(`toHsl('hsl(228, 56%, 19%)', true)`, () => {
    assert.strictEqual(toHsl('hsl(228, 56%, 19%)', true, 0.5), 'hsla(228, 56%, 19%, 0.5)');
  });
  it(`toHsl('#ffaa22aa', true)`, () => {
    assert.strictEqual(toHsl('#ffaa22aa', true), 'hsla(37, 100%, 57%, 0.7)');
  });
});

describe('toDarken', function () {
  it(`toDarken('#FF0000', 20)`, () => {
    assert.strictEqual(toDarken('#FF0000', 20), '#cc0000');
  });
  it(`toDarken('#FF0000', 20, 'rgba')`, () => {
    assert.strictEqual(toDarken('#FF0000', 20, 'rgba'), 'rgba(204, 0, 0, 1)');
  });
  it(`toDarken('#FF0000', 90, 'hsl')`, () => {
    assert.strictEqual(toDarken('#FF0000', 90, 'hsl'), 'hsl(0, 100%, 5%)');
  });
});

describe('toLighten', function () {
  it(`toLighten('rgb(255,0,0)', 20)`, () => {
    assert.strictEqual(toLighten('rgb(255,0,0)', 20), 'rgb(255, 51, 51)');
  });
  it(`toLighten('#FF0000', 20, 'rgba')`, () => {
    assert.strictEqual(toLighten('#FF0000', 20, 'rgba'), 'rgba(255, 51, 51, 1)');
  });
  it(`toLighten('#cc00cc', 90, 'hsl')`, () => {
    assert.strictEqual(toLighten('#cc00cc', 90, 'hsl'), 'hsl(300, 100%, 95%)');
  });
});

describe('toSaturate', function () {
  it(`toSaturate('#808080', 50)`, () => {
    assert.strictEqual(toSaturate('#808080', 50), '#bf4040');
  });
  it(`toSaturate('red', 20, 'rgb')`, () => {
    assert.strictEqual(toSaturate('red', 20, 'rgb'), 'rgb(255, 0, 0)');
  });
});

describe('toDesaturate', function () {
  it(`toDesaturate('red', 50)`, () => {
    assert.strictEqual(toDesaturate('red', 50), '#bf4040');
  });
  it(`toDesaturate('red', 100, 'hsl')`, () => {
    assert.strictEqual(toDesaturate('red', 100, 'hsl'), 'hsl(0, 0%, 50%)');
  });
});

describe('toRotateHue', function () {
  it(`toRotateHue('red', 120)`, () => {
    assert.strictEqual(toRotateHue('red', 120), '#00ff00');
  });
  it(`toRotateHue('red', 240, 'hsl')`, () => {
    assert.strictEqual(toRotateHue('red', 240, 'hsl'), 'hsl(240, 100%, 50%)');
  });
});

describe('toInvert', function () {
  it(`toInvert('white')`, () => {
    assert.strictEqual(toInvert('white'), '#000000');
  });
  it(`toInvert('black', 'rgb')`, () => {
    assert.strictEqual(toInvert('black', 'rgb'), 'rgb(255, 255, 255)');
  });
  it(`toInvert('red')`, () => {
    assert.strictEqual(toInvert('red'), '#00ffff');
  });
});

describe('adjustAlpha', function () {
  it(`adjustAlpha('red', 0.5, 'hexa')`, () => {
    assert.strictEqual(adjustAlpha('red', 0.5, 'hexa'), '#ff00007f');
  });
  it(`adjustAlpha('red', 0, 'rgba')`, () => {
    assert.strictEqual(adjustAlpha('red', 0, 'rgba'), 'rgba(255, 0, 0, 0)');
  });
  it(`adjustAlpha('red', 1, 'hsl')`, () => {
    assert.strictEqual(adjustAlpha('red', 1, 'hsl'), 'hsl(0, 100%, 50%)');
  });
});

describe('mix', function () {
  it(`mix('red', 'blue')`, () => {
    assert.strictEqual(mix('red', 'blue'), '#800080');
  });
  it(`mix('white', 'black', 0.3, 'rgb')`, () => {
    assert.strictEqual(mix('white', 'black', 0.3, 'rgb'), 'rgb(179, 179, 179)');
  });
  it(`mix('red', 'yellow', 0.8)`, () => {
    assert.strictEqual(mix('red', 'yellow', 0.8), '#ffcc00');
  });
});

describe('toGrayscale', function () {
  it(`toGrayscale('red')`, () => {
    assert.strictEqual(toGrayscale('red'), '#4c4c4c');
  });
  it(`toGrayscale('blue', 'rgb')`, () => {
    assert.strictEqual(toGrayscale('blue', 'rgb'), 'rgb(29, 29, 29)');
  });
  it(`toGrayscale('white')`, () => {
    assert.strictEqual(toGrayscale('white'), '#ffffff');
  });
});

describe('toComplement', function () {
  it(`toComplement('red')`, () => {
    assert.strictEqual(toComplement('red'), '#00ffff');
  });
  it(`toComplement('blue', 'hsl')`, () => {
    assert.strictEqual(toComplement('blue', 'hsl'), 'hsl(60, 100%, 50%)');
  });
  it(`toComplement('green', 'rgb')`, () => {
    assert.strictEqual(toComplement('green', 'rgb'), 'rgb(128, 0, 128)');
  });
});

describe('toHsv', function () {
  it(`toHsv('red')`, () => {
    assert.strictEqual(toHsv('red'), 'hsv(0, 100%, 100%)');
  });
  it(`toHsv('hsv(0, 100%, 100%)')`, () => {
    assert.strictEqual(toHsv('hsv(0, 100%, 100%)'), 'hsv(0, 100%, 100%)');
  });
  it(`toHsv('blue', true)`, () => {
    assert.strictEqual(toHsv('blue', true), 'hsva(240, 100%, 100%, 1)');
  });
  it(`toHsv('#808080', true, 0.5)`, () => {
    assert.strictEqual(toHsv('#808080', true, 0.5), 'hsva(0, 0%, 50%, 0.5)');
  });
});

describe('toHsv_aByObject', function () {
  it(`toHsv_aByObject('hsv(0,100%,100%)')`, () => {
    assert.deepStrictEqual(toHsv_aByObject('hsv(0,100%,100%)'), {
      red: 255,
      green: 0,
      blue: 0,
      alpha: 1
    });
  });
  it(`toHsv_aByObject('hsva(240,100%,100%,0.5)')`, () => {
    assert.deepStrictEqual(toHsv_aByObject('hsva(240,100%,100%,0.5)'), {
      red: 0,
      green: 0,
      blue: 255,
      alpha: 0.5
    });
  });
});
