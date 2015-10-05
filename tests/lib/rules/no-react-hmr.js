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

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "var MyComponent = require("react-hmr!./components/my_component");",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
