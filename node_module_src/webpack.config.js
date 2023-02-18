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
