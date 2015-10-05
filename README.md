# eslint-plugin-react-hmr-requirejs

A set of eslint rules to go along with react-hmr-requirejs

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-react-hmr-requirejs`:

```
$ npm install eslint-plugin-react-hmr-requirejs --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-react-hmr-requirejs` globally.

## Usage

Add `react-hmr-requirejs` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "react-hmr-requirejs"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "react-hmr-requirejs/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





