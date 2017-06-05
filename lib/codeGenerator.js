// @module blueHTML
var base = require('./codeGenerator.Base');
var utils = require('./codeGenerator.Utils');
var tags = require('./codeGenerator.Tags');
var attributes = require('./codeGenerator.Attributes');
var customHelpers = require('./codeGenerator.CustomHelpers');
var _ = require('underscore');

// @class CodeGenerator
base.prototype = _.extend(base.prototype, utils, tags, attributes, customHelpers, {
  // @method addCustomHandler Add a new handlebars handler
  // @param {Function }
  // @return {Void}
  addCustomHandler: function (handlebars_handlers) {
    'use strict';

    _.extend(base.prototype, handlebars_handlers || {});
  },
  // @method installPlugin Install a plugin inside the code generator
  // @param {Plugin} plugin_container
  // @return {Void}
  installPlugin: function (plugin_container) {
    'use strict';

    /* jshint -W030 */
    plugin_container && plugin_container.install && plugin_container.install(base);
  }
});

module.exports = base;

// @class Plugin
// @method install Public method invoked by blueHTML when adding a new plugin.
// @param {CodeGenerator} codeGenerator
// @return {Void}
