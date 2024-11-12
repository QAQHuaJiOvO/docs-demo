## callback(event)

callback是回调函数:

```js
fundebug.init({
    callback: function(event) {
        console.log(event);
    }
});
```

其中event为上报到Fundebug服务器的错误数据，需要的话，您可以使用callback函数来查看错误数据，也可以将其发送到其他数据平台。