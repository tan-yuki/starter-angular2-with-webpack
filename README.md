# starter-angular2-with-webpack

## あきらめたこと

###  `templateUrl`によるHTMLファイルの解決

`@Component`で`templateUrl`を指定してもパスは解決できない。
`template`属性を用いて直接HTMLを書くようにした。

###  jsonのロード

```
import data from `./sample.json`;
```

のような呼び出し。[json-loader](https://github.com/webpack/json-loader)というライブラリはあるが、
webpack + TypeScript環境ではうまく動かないみたい。
