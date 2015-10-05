/**
 * @fileoverview A set of eslint rules to go along with react-hmr-requirejs
 * @author Bradley Spaulding
 * @copyright 2015 Bradley Spaulding. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = {
  "no-react-hmr": require("./rules/no-react-hmr.js")
};
