/*** 测试babel-plugin-import ***/
const babel = require('@babel/core')
const types = require('@babel/types')
const plugin = require('../plugins/babel-plugin-import-offline').default
const visitor = plugin({types})
const code1 = `
    import { Select as BeeSelect, Pagination } from '@dp/bee-ui';
    import { DatePicker } from '@dp/bee-ui';
    import * as Bee from '@dp/bee-ui';
    import lodash from 'lodash';
`;
const code = `
    // import iView from 'iview'
    import { Circle, Table } from 'iview'
    Vue.component('iCircle', Circle)
`
const result = babel.transform(code, {
    plugins: [
        [
            visitor,
            {
                "libraryName": "iview",
                "camel2DashComponentName": true,
                "transformToDefaultImport": true,
                "libraryDirectory": "src/components",
                // "fileName": "vid",
                "load": 'auto'
            }
        ]
    ]
});

console.log('code is ', result);