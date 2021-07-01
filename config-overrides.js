<<<<<<< HEAD
const { override, fixBabelImports, addLessLoader } = require('customize-cra');


 module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true,
   }),
   addLessLoader({
     javascriptEnabled: true,
     modifyVars: { '@primary-color': '#f0d50e' },
   }),
=======
const { override, fixBabelImports, addLessLoader } = require('customize-cra');


 module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true,
   }),
   addLessLoader({
     javascriptEnabled: true,
     modifyVars: { '@primary-color': '#f0d50e' },
   }),
>>>>>>> ac2274823e48c4d2e6a87c04937ab6e997d00345
 );