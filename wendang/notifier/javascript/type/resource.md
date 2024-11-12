#### 资源加载错误

**资源加载错误**在Fundebug控制台的图标如下：

<table>
	<img src="../../../images/notifier/javascript/type/resource.png" align="left" style="width:5%;"><br>
</table>

对于一个复杂的大型网站，所依赖的静态文件(js, css, jpg...)成千上万，因此出现加载错误，比如404，也是很常见的一种错误。

下面的示例中，所引入的test.jpg并不存在，因此会报404错误：

```html
<img src="test.jpg">
```

开发者可以在Fundebug控制台错误详情: 

<table>
	<img src="../../../images/notifier/javascript/type/02.png" align="left" style="width:50%;"><br>
</table>


Fundebug插件捕获的错误数据如下：

```javascript
{
    "notifierVersion": "0.2.0",
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:54.0) Gecko/20100101 Firefox/54.0",
    "locale": "zh",
    "url": "https://www.fundebug.com",
    "title": "Test",
    "apiKey": "API-KEY",
    "time": 1502864167717,
    "type": "resourceError",
    "target": {
        "outerHTML": "<img src=\"test.jpg\">",
        "src": "https://www.fundebug.com/test.jpg",
        "tagName": "IMG",
        "id": "",
        "className": "",
        "name": "jpg",
        "XPath": "/html/body/img[1]",
        "selector": "HTML > BODY:nth-child(2) > IMG:nth-child(2)",
        "status": 404,
        "statusText": "Not Found"
    }
}
```

**资源加载错误**的**type**属性值为**resourceError**。

##### silentResource

如果你不需要监控**资源加载错误**，则可以将[silentResource](../customize/silentresource.md)属性设为true。