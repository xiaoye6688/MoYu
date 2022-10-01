import { defineComponent } from 'vue'
import { css } from '@emotion/css'

const style = css``

export default defineComponent({
  name: 'HomeContent',
  setup () {
    return () => (
            <div class={style}>
                <h1>HomeContent</h1>
                <div>
                    <p>这是主页内容1</p>
                </div>
                <div>
                    <p>这是主页内容2</p>
                </div>
            </div>
    )
  }
})
