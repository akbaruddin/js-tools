# Configure Flow in JavaScript

## Setup

Create `package.json` file

```bash
pnpm init -y
```

Install Babel and Flow bin

```bash
pnpm i -D @babel/{cli,core,preset-flow} flow-bin
```

Create `.babelrc` file

```json
{
  "presets": ["@babel/preset-flow"]
}
```

Generate `.flowconfig` file

```bash
pnpx flow init
```

Check flow error and status

```bash
pnpx flow status
```

Add compile on `package.json`

```javascript
"scripts": {
    "build": "babel src/ -d lib/"
},
```

add `@flow` on Source file

`main.js`

```javascript
// @flow

/**
 * Code
 */
```

## RUN

```bash
pnpm build
```