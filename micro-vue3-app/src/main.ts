import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 为了在离开的时候把实例的信息都清掉，否则微应用会影响主应用
let instance: any = null;

function render(props?:any) {
  const container: any = props?.container;
  console.log('独立运行时, vue3微应用 打印 container ===', container);
  instance = createApp(App);
  instance.use(router);
  instance.mount(container ? container.querySelector('#app') : '#app'); // 限制查找元素的范围
}

// 独立运行时
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}

// 生命周期
export async function bootstrap(): Promise<void> {
  console.log('vue3微应用，bootstraped');
}

export async function mount(props: { [keys: string]: any; } | undefined): Promise<void> {
  console.log('vue3微应用，挂载', props);
  render(props);
}

export async function unmount(): Promise<void> {
  console.log('vue3微应用，卸载');
  instance.unmount();
  instance._container.innerHTML = '';
  instance = null;
}