import { defineComponent } from 'vue'
import { css } from '@emotion/css'

// import LogoVue from '../assets/logo.png'
// import LogoElectron from '../assets/logo-electron.png'
import mylogo from '../assets/256x256_0.png'

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
}`

export default defineComponent({
  name: 'Logo',
  setup () {
    return () => (
      <div class={style}>
        <img class="logo" src={mylogo} />
        {/* <img class="logo" src={LogoVue}></img> */}
        {/* 加载图片当前目录下的256x256_0.png */}
        {/* <img class="logo-electron" src={LogoElectron}></img> */}
      </div>
    )
  }
})
