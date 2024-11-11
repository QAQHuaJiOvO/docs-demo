## notifyError(Throwable e)

使用notifyError，可以将主动捕获的错误发送到Fundebug


示例：

```java
try 
{
  // 代码
}
catch (Throwable e) 
{
  fundebug.notifyError(e);
}
```

fundebug.notifyError()上报的错误的类型"uncaught"，即type属性的值为"uncaught"。