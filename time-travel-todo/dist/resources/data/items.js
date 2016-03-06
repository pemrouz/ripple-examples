'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _versioned = require('versioned');

var _versioned2 = _interopRequireDefault(_versioned);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'items',
  body: (0, _versioned2.default)([{ item: 'lorem', completed: true }, { item: 'ipsum', completed: false }])
};