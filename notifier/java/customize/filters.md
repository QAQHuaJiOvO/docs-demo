#### filters

通过配置filters属性，用户可以过滤掉一些不需要捕获的错误，比如`java.lang.NullPointerException`。

下面的配置会过滤掉`class`名为`java.lang.ClassCastException`，或则`hostname`为`fundebugMacBook-Pro.local`的错误。

```java
List<Map<String, String>> filters = new ArrayList<Map<String, String>>();
Map<String, String> filter1 = new HashMap<String, String>();
filter1.put("class", "java.lang.ClassCastException");
filter2.put("hostname", "fundebugMacBook-Pro.local");
filters.add(filter1);
filters.add(filter2);
fundebug.setFilters(filters);
```

##### 配置规则

filters属性有以下特点：

- 它是一个List集合，集合中的元素为Map类型，Map中的键值对组成一条**过滤规则**；
- 当错误符合List集合中任意一条过滤规则时，则会被过滤；
- Map中的所有的键值对都满足的时候，错误会被过滤；
- Map对象的key为错误的属性名，value为过滤条件；


##### 示例1：过滤空指针异常的错误

```java
List<Map<String, String>> filters = new ArrayList<Map<String, String>>();
Map<String, String> filter1 = new HashMap<String, String>();
filter1.put("class", "java.lang.NullPointerException");
filters.add(filter1);
fundebug.setFilters(filters);
```

##### 示例2：过滤hostname为fundebugMacBook-Pro.local的错误

```java
List<Map<String, String>> filters = new ArrayList<Map<String, String>>();
Map<String, String> filter1 = new HashMap<String, String>();
filter1.put("hostname", "fundebugMacBook-Pro.local");
filters.add(filter1);
fundebug.setFilters(filters);
```

##### 示例3：过滤hostname为fundebugMacBook-Pro.local且空指针异常的错误

```java
List<Map<String, String>> filters = new ArrayList<Map<String, String>>();
Map<String, String> filter1 = new HashMap<String, String>();
filter1.put("hostname", "fundebugMacBook-Pro.local");
filter2.put("class", "java.lang.NullPointerException");
filters.add(filter1);
filters.add(filter2);
fundebug.setFilters(filters);
```

