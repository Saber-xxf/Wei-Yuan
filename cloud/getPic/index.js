// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const request = require('request')
// 云函数入口函数

exports.main = async (event, context) => {
  const fileList = event.pic;
  const result = await cloud.getTempFileURL({
    fileList: fileList,
  })
  return result.fileList
}
