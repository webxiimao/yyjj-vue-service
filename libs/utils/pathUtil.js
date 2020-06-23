/*
 * @Author: maoyuyu
 * @Date: 2020-06-20 17:01:38
 * @LastEditors: maoyuyu
 * @LastEditTime: 2020-06-21 20:02:36
 * @Description: 
 */ 

const path = require('path')

/**
 * 当前vue-service根目录
 */
const rootPath = path.join(__dirname, '../../')

/**
 * vue-service 的path方法
 * @param  {...any} p path 路径
 */
const getResolvePath = (...p) => path.join(rootPath, ...p)

/**
 * 获取当前运行目录
 * @param  {...any} p path 路径
 */
const getCwdPath = (...p) => path.join(process.cwd(), ...p)

module.exports = {
  rootPath,
  getResolvePath,
  getCwdPath
}

