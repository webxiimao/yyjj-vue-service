/*
 * @Author: maoyuyu
 * @Date: 2020-06-20 16:58:06
 * @LastEditors: maoyuyu
 * @LastEditTime: 2020-06-21 20:27:08
 * @Description: 
 */ 

// const path = require('path')
// 添加环境变量
const dotenvExpand = require('dotenv-expand')
const { getCwdPath } = require('vue-service/libs/utils/pathUtil')
// const cwdPath = process.cwd()
const yyjjConfig = require(getCwdPath('yyjj.config.js'))
/*是否是生产环境 */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  devServer: {
    port: yyjjConfig.base_config.port || 8000
  }
}