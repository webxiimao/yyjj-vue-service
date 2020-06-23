/*
 * @Author: maoyuyu
 * @Date: 2020-06-20 16:56:18
 * @LastEditors: maoyuyu
 * @LastEditTime: 2020-06-21 20:01:52
 * @Description: 
 */ 

const util = require('vue-service/libs/utils/pathUtil')

// 修改vue.config.js 的检索目录
process.env.VUE_CLI_SERVICE_CONFIG_PATH = util.getResolvePath('libs', 'config', 'vue.config.js')

require('@vue/cli-service/bin/vue-cli-service')