import { registerMicroApps, start } from 'qiankun';

const getActiveRule = (hash: string) => (location: { hash: string; }) => location.hash.startsWith(hash);

// 判断是否是生产环境
const isProd = process.env.NODE_ENV === 'production';

// 微应用路由配置
const apps = [
  {
    name: 'micro-vue3-app', // 唯一值。建议和package.json中的name一致
    // entry: 'http://localhost:9160/micro-vue3-app/', // 生产环境运行的地址
    // entry: '//localhost:8081', // 开发环境运行的地址
    entry: isProd ? '//localhost:9160/micro-vue3-app/' : '//localhost:8081',
    container: '#micro-app', // 容器ID
    activeRule: getActiveRule('#/vue'), // 激活路径
  },
  {
    name: 'micro-h5-app', // 唯一值。建议和package.json中的name一致
    // entry: 'http://localhost:9160/micro-h5-app/', // 生产环境运行的地址
    // entry: '//localhost:8083', // 开发环境运行的地址
    entry: isProd ? '//localhost:9160/micro-h5-app/' : '//127.0.0.1:5500/micro-front-demo/mirco-h5-app/src/index.html',
    container: '#micro-app', // 容器ID
    activeRule: getActiveRule('#/h5'), // 激活路径
  },
];

// 注册微应用的基础配置信息。当浏览器 url 发生变化时，会自动检查每一个微应用注册的 activeRule 规则，符合规则的应用将会被自动激活。
registerMicroApps(apps);

// 导出 qiankun 的启动函数
export default start;
