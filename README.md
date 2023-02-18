# node_html_class_test
Node.jsでクラスを作って、それをwebpackでEJSにコンパイルして、HTML上のJavaScriptで使えそうな気がするので確認と方法の確立

# モジュール側の構築方法
- CommonJSで書く
  - EJSで書きたい場合は、EJSからBabelでCommonJS化して、このリポジトリの手順になる。
  - このリポジトリではCommonJSからの話。
```JavaScript
// 関数を定義
function _my_add(a, b) {
    return a+b;
}

// export
module.exports.my_add = _my_add;
```

## コンパイル手順
1. Node環境にwebpackをインストール
   - `$ npm install --save-dev webpack webpack-cli`
2. webpack.config.jsにコンパイル方法を記述
```JavaScript
// webpackの設定ファイル
var path = require("path");

module.exports = {
    // 入力モジュールのエントリーファイル
    // ./src/index.jsとかでもよい。（普通そうなりそう）
    entry: "./index.js",
    output: {
        // 出力先
        path: path.join(__dirname, "dist", "assets"),
        // 出力ファイル名
        filename: "sample_node_module_add.js"
	}
}
```
3. コンパイルを実行
    - `$ npx webpack --mode development`

4. (おまけ)`package.json`に下記のように書いておくと、`$ npm run debug`でコンパイルできる。
```JSON
"scripts": {
    "debug": "webpack --mode development",
    "build": "webpack --mode production"
}
```

# HTML側での利用方法
1. 作成された`sample_node_module_add.js`を普通にscriptタグで読む。
2. JavaScriptの中で、`my_add(11, 22)`とか普通に呼び出す。

