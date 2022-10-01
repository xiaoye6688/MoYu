import { defineComponent } from 'vue'
import { css } from '@emotion/css'
// 引入前端框架
// import { ElMenu, ElMenuItem } from 'element-plus'

const style = css`
.logo {
  width: 8vh;
  padding: 3vh;
  user-select: none;
}

.logo-electron {
  width: 20vh;
  padding: 3vh;
  user-select: none;
  border-radius: 50%;
}
button {
  width: 90%;
  height: 100%;
  border: none;
  background-color: #fff;
  color: #000;
  font-size: 1.5em;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  transition: 0.3s;
  border-radius: 10px;
  box-shadow: 0 0 10px #000;
  &:hover {
    background-color: #1E90FF;
    color: #fff;
  }
  margin: 0.5em;
}
`
export default defineComponent({
  name: 'HomeMenu',
  setup () {
    return () => (
      <div class={style}>
        <button id='HomeMenu'>
          主页
        </button>
        <button id='VideoMenu'>
          视频
        </button>
        {/* 创建一个menu */}
        {/* <ElMenu default-active="1" class="el-menu-vertical-demo" mode="vertical">
          <ElMenuItem index="1">处理数据</ElMenuItem>
          <ElMenuItem index="2">数据分析</ElMenuItem>
          <ElMenuItem index="3">数据可视化</ElMenuItem>
          <ElMenuItem index="4">数据展示</ElMenuItem>
        </ElMenu> */}
        {/* <img class="logo" src={LogoVue}></img> */}
        {/* 加载图片当前目录下的256x256_0.png */}
        {/* <img class="logo-electron" src={LogoElectron}></img> */}
      </div>
    )
  }
})
