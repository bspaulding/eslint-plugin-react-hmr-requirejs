/**
 * @fileoverview Calls to react-hmr plugin are not allowed in committed code.
 * @author Bradley Spaulding
 * @copyright 2015 Bradley Spaulding. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-react-hmr"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-react-hmr", rule, {

    valid: [
        "var MyComponent = require(\"require-jsx/jsx!./components/my_component\");",
        "var MyComponent = require(\"es6!./components/my_component\");",
        "var MyComponent = require(\"babel!./components/my_component\");"
    ],

    invalid: [
        {
            code: "var MyComponent = require(\"react-hmr!./components/my_component\");",
            errors: [{
                message: "Uses of the react-hmr should not be committed. Use this plugin in development only.",
            }]
        }
    ]
});
