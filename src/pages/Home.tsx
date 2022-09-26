import { defineComponent } from 'vue'
import { css } from '@emotion/css'
// import { RouterLink } from 'vue-router'

// import Counter from '../components/Counter'
// import HelloWorld from '../components/HelloWorld'
import Logo from '../components/Logo'

const style = css`
h5 {
  // 文字不可选中
  user-select: none;
`
export default defineComponent({
  name: 'PageHome',
  setup () {
    return () => (
      <>
        <div class={style}>
      <Logo />
      
      <h5>v 0.0.0</h5>
        
        {/* 一条蓝色分割线 */}
        <hr style="border: 1px solid #1E90FF;" />
        {/* <HelloWorld message="Hello Vue + Electron" /> */}
        {/* <p>
          <RouterLink to="/blank">Next page</RouterLink>
          {' | '}
          <Counter />
        </p> */}
      </div>
      </>
    )
  }
})
