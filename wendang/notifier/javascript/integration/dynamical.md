#### 动态加载

动态加载Fundebug插件可以这样实现：

```html
<script type="text/javascript">
	
function loadScript(url, apikey) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = url;
	script.setAttribute("apikey", apikey);
	document.body.appendChild(script);
}

loadScript("https://js.fundebug.cn/fundebug.2.8.0.min.js", "API-KEY")
</script>
```

注意，**apikey**需要使用[setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)方法进行配置。