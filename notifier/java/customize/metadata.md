####metaData

metaData是其他自定义信息，开发者可以使用metaData收集所需要的信息。

配置metaData:

```java
Map<String, Object> metaData = new HashMap<String, Object>();
metaData.put("name" , "Fundebug");
metaData.put("company", "厦门云麒");
fundbeug.setMetaData(metaData);
```

备注：如果您传入其他自定义类型的数据，需要实现`toString`方法。