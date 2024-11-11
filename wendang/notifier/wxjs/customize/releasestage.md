#### releaseStage

releaseStage指的是应用开发阶段，例如『开发』、『测试』、『生产』:

- development
- test
- production

#### 插件版本 >= 0.6.1

```js
fundebug.init(
{
    releaseStage : "development"
})
```


#### 插件版本 <= 0.5.0

```js
fundebug.releaseStage = "development";
```