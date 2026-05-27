/// <reference types="mocha" />
/// <reference types="node" />
import assert from 'assert';
import getColorByKeyword from '../src/get/getColorByKeyword';
import getRgbaVal from '../src/get/getRgbaVal';
import getGeneratePalette from '../src/get/getGeneratePalette';
import getLuminance from '../src/get/getLuminance';
import getContrast from '../src/get/getContrast';
import getHue from '../src/get/getHue';
import getSaturation from '../src/get/getSaturation';
import getLightness from '../src/get/getLightness';
import getAnalogous from '../src/get/getAnalogous';
import getTriadic from '../src/get/getTriadic';
import getMonochromatic from '../src/get/getMonochromatic';
import getSplitComplementary from '../src/get/getSplitComplementary';
import getTetradic from '../src/get/getTetradic';

describe('getColorByKeyword', function () {
  it(`getColorByKeyword('red')`, () => {
    assert.strictEqual(getColorByKeyword('red'), '#ff0000');
  });
  it(`getColorByKeyword('blue')`, () => {
    assert.strictEqual(getColorByKeyword('blue'), '#0000ff');
  });
});

describe('getRgbaVal', function () {
  it(`getRgbaVal('hsl( 200, 50%, 50%)')`, () => {
    assert.deepStrictEqual(getRgbaVal('hsl( 200, 50%, 50%)'), {
      red: 63,
      green: 148,
      blue: 191,
      alpha: 1,
      format: 'hsl'
    });
  });
  it(`getRgbaVal('rgba( 20, 20, 200, 0.5)')`, () => {
    assert.deepStrictEqual(getRgbaVal('rgba( 20, 20, 200, 0.5)'), {
      red: 20,
      green: 20,
      blue: 200,
      alpha: 0.5,
      format: 'rgba'
    });
  });
  it(`getRgbaVal('#000000ff')`, () => {
    assert.deepStrictEqual(getRgbaVal('#000000aa'), {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 0.7,
      format: 'hexa'
    });
  });
  it(`getRgbaVal('red')`, () => {
    assert.deepStrictEqual(getRgbaVal('red'), {
      red: 255,
      green: 0,
      blue: 0,
      alpha: 1,
      format: 'hex'
    });
  });
});

describe('getGeneratePalette', function () {
  it(`getGeneratePalette("#ff0000", "yellow", 6, 'rgb')`, () => {
    assert.deepStrictEqual(getGeneratePalette('#ff0000', 'yellow', 6, 'rgb'), [
      'rgb(255, 0, 0)',
      'rgb(255, 51, 0)',
      'rgb(255, 102, 0)',
      'rgb(255, 153, 0)',
      'rgb(255, 204, 0)',
      'rgb(255, 255, 0)'
    ]);
  });

  it(`getGeneratePalette("#ff0000", "yellow", 6)`, () => {
    assert.deepStrictEqual(getGeneratePalette('#ff0000', 'yellow', 6), [
      '#ff0000',
      '#ff3300',
      '#ff6600',
      '#ff9900',
      '#ffcc00',
      '#ffff00'
    ]);
  });

  it(`getGeneratePalette("#cccccc", "#000000", 8, 'rgb')`, () => {
    assert.deepStrictEqual(getGeneratePalette('#cccccc', '#000000', 8, 'rgb'), [
      'rgb(204, 204, 204)',
      'rgb(175, 175, 175)',
      'rgb(146, 146, 146)',
      'rgb(117, 117, 117)',
      'rgb(87, 87, 87)',
      'rgb(58, 58, 58)',
      'rgb(29, 29, 29)',
      'rgb(0, 0, 0)'
    ]);
  });
});

describe('getLuminance', function () {
  it(`getLuminance('#ffffff')`, () => {
    assert.strictEqual(getLuminance('#ffffff'), 1);
  });
  it(`getLuminance('#000000')`, () => {
    assert.strictEqual(getLuminance('#000000'), 0);
  });
  it(`getLuminance('red')`, () => {
    assert.strictEqual(getLuminance('red'), 0.2126);
  });
});

describe('getContrast', function () {
  it(`getContrast('#000000', '#ffffff')`, () => {
    assert.strictEqual(getContrast('#000000', '#ffffff'), 21);
  });
  it(`getContrast('#ffffff', '#ffffff')`, () => {
    assert.strictEqual(getContrast('#ffffff', '#ffffff'), 1);
  });
});

describe('getHue', function () {
  it(`getHue('red')`, () => {
    assert.strictEqual(getHue('red'), 0);
  });
  it(`getHue('blue')`, () => {
    assert.strictEqual(getHue('blue'), 240);
  });
});

describe('getSaturation', function () {
  it(`getSaturation('red')`, () => {
    assert.strictEqual(getSaturation('red'), 100);
  });
  it(`getSaturation('#808080')`, () => {
    assert.strictEqual(getSaturation('#808080'), 0);
  });
});

describe('getLightness', function () {
  it(`getLightness('white')`, () => {
    assert.strictEqual(getLightness('white'), 100);
  });
  it(`getLightness('black')`, () => {
    assert.strictEqual(getLightness('black'), 0);
  });
  it(`getLightness('red')`, () => {
    assert.strictEqual(getLightness('red'), 50);
  });
});

describe('getAnalogous', function () {
  it(`getAnalogous('red')`, () => {
    const colors = getAnalogous('red');
    assert.strictEqual(colors.length, 3);
    assert.strictEqual(colors[1], '#ff0000');
  });
});

describe('getTriadic', function () {
  it(`getTriadic('red')`, () => {
    const colors = getTriadic('red');
    assert.strictEqual(colors.length, 3);
    assert.strictEqual(colors[0], '#ff0000');
  });
});

describe('getMonochromatic', function () {
  it(`getMonochromatic('red')`, () => {
    const colors = getMonochromatic('red');
    assert.strictEqual(colors.length, 5);
    assert.strictEqual(colors[0], '#000000');
    assert.strictEqual(colors[4], '#ffffff');
  });
});

describe('getSplitComplementary', function () {
  it(`getSplitComplementary('red')`, () => {
    const colors = getSplitComplementary('red');
    assert.strictEqual(colors.length, 3);
    assert.strictEqual(colors[0], '#ff0000');
  });
});

describe('getTetradic', function () {
  it(`getTetradic('red')`, () => {
    const colors = getTetradic('red');
    assert.strictEqual(colors.length, 4);
    assert.strictEqual(colors[0], '#ff0000');
  });
});
