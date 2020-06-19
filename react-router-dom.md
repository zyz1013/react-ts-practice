# react-router-dom 5.0

#链接:https://segmentfault.com/a/1190000020812860

## 主要有三类组件

### 路由器 HashRouter 和 BrowserRouter

HashRouter：将当前位置存储在 URL 的哈希部分中，因此 URL 看起来类似于http://example.com/#/your/page。 由于哈希从不发送到服务器，因此这意味着不需要特殊的服务器配置。

BrowserRouter：使用常规 URL 路径。 这些通常是外观最好的网址，但它们要求您的服务器配置正确。 具体来说，您的 Web 服务器需要在所有由 React Router 客户端管理的 URL 上提供相同的页面。Create React App 在开发中即开即用地支持此功能，并附带有关如何配置生产服务器的说明。

路由匹配器 Route 和 Switch

导航 Link NavLink 和 Redirect
