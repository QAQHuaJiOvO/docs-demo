####releaseStage

releaseStage指的是应用开发阶段，例如『开发』、『测试』、『生产』:

- development
- test
- production

默认情况下，Fundebug会自动识别releaseStage。用户也可以通过设置releaseStage以区分不同阶段的错误。


 1. 使用fundebug的属性进行配置releaseStage

 ```
 fundebug.releaseStage = "development" 
 ```

 2. 使用fundebug.config函数配置releaseStage

 ```js
 fundebug.config(
 {
     releaseStage: "development"
 })
 ```