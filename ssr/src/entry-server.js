import createApp from "./main"

// 首屏渲染，在服务端执行
// 创建Vue实例
// 调用者是将来的渲染器renderer
export default context => {
  // 为了让renderer可以处理异步结果，这里应该返回Promise
  return new Promise((resolve, reject) => {
    // 创建vue实例和路由实例
    const {
      app,
      router
    } = createApp(context)

    // 获取用户请求url, 从而知道要渲染哪个页面
    // 跳转到首屏
    router.push(context.url)

    // 监听路由ready事件，确保异步任务都完成
    router.onReady(() => {
      resolve(app)
    }, reject)
  })
  
}