/**
 * @fileoverview Calls to react-hmr plugin are not allowed in committed code.
 * @author Bradley Spaulding
 * @copyright 2015 Bradley Spaulding. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    function any(xs, f) {
      for (var i = 0; i < xs.length; i += 1) {
        if (f(xs[i])) {
          return true;
        }
      }

      return false;
    }

    function calleeIsRequire(callee) {
      return callee.type === "Identifier" && callee.name === "require";
    }

    // arguments:
    //    [ { type: 'Literal',
    //        value: 'react-hmr!./components/my_component',
    //        raw: '"react-hmr!./components/my_component"',
    //        range: [Object],
    //        loc: [Object] } ]
    var argumentsMatcher = /^react-hmr!/;
    function argumentsCallReactHMR(args) {
      return any(args, function(argument) {
        return argumentsMatcher.exec(argument.value);
      });
    }

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {
      CallExpression: function(node) {
        if (calleeIsRequire(node.callee) && argumentsCallReactHMR(node.arguments)) {
          context.report(node, "Uses of the react-hmr should not be committed. Use this plugin in development only.");
        }
      }
    };

};

module.exports.schema = [];
