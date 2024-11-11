#### 监控 [React](https://facebook.github.io/react/)

React 16之前的版本，仅需[接入插件](../integration/npm.md)即可，无需额外配置。

对于React 16及其以后的版本，需要在**src/index.js**中进行额外配置：

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // 将component中的报错发送到Fundebug
    fundebug.notifyError(error, {
      metaData: {
        info: info
      }
    });
  }

  render() {
    if (this.state.hasError) {
      return null
      // 也可以在出错的component处展示出错信息
      // return <h1>出错了!</h1>;
    }
    return this.props.children;
  }
}

ReactDOM.render( < ErrorBoundary > < App / > < /ErrorBoundary>, document.getElementById('root'));
```

#### Demo项目：[fundebug-react-demo](https://github.com/Fundebug/fundebug-react-demo) 