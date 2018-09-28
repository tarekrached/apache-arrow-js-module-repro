Minimal Repro of `export XXX was not found in YYY` issue

When `strictExportPresence` is set to `true` in webpack.config, webpack exits, with the following error message:

```
export 'XXX' was not found in 'yyy'
```

I believe this is due to the apache-arrow ts to js transpilation.

Reproduced in this repo - run `npm run build-broken` to see webpack fail, or
```
./node_modules/.bin/webpack --config ./webpack.config.strictExportPresence.true.js
```

This results in the following error:
```
"export 'Table' was not found in 'apache-arrow'
```

With `strictExportPresence` set to `false`, there's a warning, but it still compiles.  This can be seen with `npm run build-working`, or

```
./node_modules/.bin/webpack --config ./webpack.config.strictExportPresence.false.js
```
