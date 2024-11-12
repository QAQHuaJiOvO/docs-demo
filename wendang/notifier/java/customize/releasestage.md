#### releaseStage

releaseStage指的是应用开发阶段，例如『开发』、『测试』、『生产』:

- development
- test
- production

除了这3个常见的取值，releaseStage可以设为任意值，可以根据需要进行配置。

默认情况下，Fundebug的releaseStage值为production。用户也可以通过设置releaseStage以区分不同阶段的错误。

配置releaseStage属性

```java
 fundebug.setReleaseStage("development");
```