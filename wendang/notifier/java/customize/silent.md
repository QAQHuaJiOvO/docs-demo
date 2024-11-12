## silent

布尔类型，默认值为 false。

如果您暂时不需要使用 Fundebug，可以选择配置安静模式，将 silent 属性设为 true。这样的话，Fundebug 不会收集错误信息，因此也不会发送报警邮件。

配置 silent 属性：

```java
 fundebug.setSilent(true);
```

当 silent 设为 true 时，**Fundebug 不再收集任何错误**。
