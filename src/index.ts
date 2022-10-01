setTimeout(() => {
  // 给id为app的div下面的所有button绑定click事件
  const buttons = document.querySelectorAll('#app button')
  buttons.forEach(button => {
    button.addEventListener('click', () => {
    // 获取button的id 删除id中的Menu
      const classtype = button.id.replace('Menu', '') + 'Content'
      console.log(classtype)
      //   将id为Content的div的class属性修改为classtype
      const content = document.querySelector('#Content')
      if (content) {
        content.className = classtype
      }
      // 重新渲染
    })
  })
}, 1000)
