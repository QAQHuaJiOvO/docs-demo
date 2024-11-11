#### 敏感信息过滤

对于监控插件(>=1.0.0)的版本，我们支持出错场景完全可视化重现。
Fundebug的JavaScript插件已经对密码等敏感数据进行了自动化过滤。
另外，如果您在某个(DOM)节点配置了`_fun-hide`的class，那么该元素在插件进行录制前就会被预先删除掉来保障隐私安全。


```js
<div class="bankAccount _fun-hide">
  <input name="accountNumber" />
</div>

```

如果在class的属性中配置了`_fun-hide`，那么相关数据不会被录制下来。












