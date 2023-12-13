// Express の作成
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
// publicフォルダを、Web公開
app.use(express.static(__dirname + '/public'));