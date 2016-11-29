# eslint-config-vyorkin

[![travis build](https://img.shields.io/travis/vyorkin-person/eslint-config-vyorkin.svg?style=flat-square)](https://travis-ci.org/vyorkin-person/eslint-config-vyorkin)
[![version](https://img.shields.io/npm/v/vyorkin.svg?style=flat-square)](http://npm.im/vyorkin)
[![downloads](https://img.shields.io/npm/dm/vyorkin.svg?style=flat-square)](http://npm-stat.com/charts.html?package=vyorkin&from=2016-12-01)
[![travis build](https://img.shields.io/travis/vyorkin-person/eslint-config-vyorkin.svg?style=flat-square)](https://travis-ci.org/vyorkin-person/eslint-config-vyorkin)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

ESLint rules for all of my personal projects. Feel free to use these conventions :-)

## Usage

Install the conventions by running:

```
yarn add --dev eslint eslint-config-vyorkin
```

Then add the extends to your `.eslintrc`:

```javascript
{
  "extends": "vyorkin",
  "rules": {
    // your overrides
  }
}
```

### Other configs

This config also exposes a few other configs that I use often and pull in as needed.

You can use them standalone:

```javascript
{
  "extends": "vyorkin/<config-name>"
}
```

Or in combination with the base config (recommended)

```javascript
{
  "extends": ["vyorkin", "vyorkin/<config-name>"]
}
```

## Configs

* [default (index.js)]()
* [base]()
* [flow]()
* [typescript]()
* [fp]()
* [promise]()
* [ava]()
* [tape]()
* [react]()
* [jsx-a11y]()
* [comments]()
* [lodash]()
* [security]()

### Dependencies

* [default (index.js)]() config extends [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
* [base]() extends [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) respectively

#### Plugins

* [eslint-plugin-ava](https://github.com/avajs/eslint-plugin-ava)
* [eslint-plugin-tape](https://github.com/atabel/eslint-plugin-tape)
* [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype)
* [eslint-plugin-typescript](https://github.com/nzakas/eslint-plugin-typescript)
* [eslint-plugin-fp](https://github.com/jfmengels/eslint-plugin-fp/)
* [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
* [eslint-plugin-prefer-object-spread](https://github.com/bryanrsmith/eslint-plugin-prefer-object-spread)
* [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
* [eslint-plugin-lodash-fp](https://github.com/jfmengels/eslint-plugin-lodash-fp)
* [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
* [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
* [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)
* [eslint-plugin-typescript](https://github.com/nzakas/eslint-plugin-typescript)

## Inspiration

The main ideas is shamelessly stolen from the awesome [Kent C. Dodds](https://github.com/kentcdodds) [eslint config](https://github.com/kentcdodds/eslint-config-kentcdodds).

Here is the list of various personal configs I am aware of:

* [eslint-config-kentcdodds](https://github.com/kentcdodds/eslint-config-kentcdodds) (largely inspired)
* [eslint-config-formidable](https://github.com/FormidableLabs/eslint-config-formidable)
* [eslint-config-google](https://github.com/google/eslint-config-google)
* [eslint-config-metalab](https://github.com/metalabdesign/eslint-config-metalab)
* [eslint-config-walmart](https://github.com/walmartlabs/eslint-config-walmart)
* [eslint-config-gpbl](https://github.com/gpbl/eslint-config-gpbl)

## LICENSE

WTFPL
