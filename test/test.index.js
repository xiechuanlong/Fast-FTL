/**
 * Created by june on 2017/1/23.
 */
"use strict";
var FastFTL = require('../dist/index').default;
var fastFtl = FastFTL({
    root: "E:\\haitaowap\\src\\main\\webapp\\WEB-INF\\template"
});
fastFtl.parse('pages/index/index.ftl', {
    name: "Jack"
}).then(data => {
    console.log(data);
}).catch(e => {
    console.log(e.toString('utf-8'))
});