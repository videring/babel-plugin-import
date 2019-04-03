const babel = require('@babel/core');
const types = require('@babel/types');

module.exports = function ({ types }) {
    return {
        visitor:  {
            ImportDeclaration: {
                enter(path, ref={}) {
                    let { opts } = ref //  { library: 'lodash' }
                    let node = path.node;
                    let specifiers = node.specifiers
                    if (node.type === 'ImportDeclaration' && opts.library === node.source.value && !types.isImportDeclaration(specifiers[0])) {
                        let newImports = specifiers.map((specifier) => {
                            // import {cloneDeep} from 'lodash' => import cloneDeep from 'lodash/cloneDeep'
                            return types.importDeclaration([types.ImportDefaultSpecifier(specifier.local)], types.stringLiteral(`${node.source.value}/${specifier.local.name}`))
                        });
                        path.replaceWithMultiple(newImports)
                    }
                },
                exit(...args) {
                    console.log('exit ', args)
                }
            }
        }
    }
}