#### 测试插件

接入插件之后，在微信开发者工具的控制台执行以下命令，即可发送测试数据到Fundebug：

```javascript
fundebug.test("Test", "Hello, Fundebug")
```

##### Fundebug的控制台会收到这条错误记录


##### 同时，您将收到报警邮件

<div style="">
    <center>
        <div style="margin: 40px auto 0; width: 580px; background: #FFF; box-shadow: 0 0 10px #333; text-align:left;">
            <div style="margin: 0 20px; color: #999; border-bottom: 1px dotted #DDD; padding: 40px 0 30px; font-size: 15px; text-align: center;">
                <a href="https://www.fundebug.com"><img src="https://image.fundebug.com/fundebug-black.jpg" style="width:30%;"></a>
                <br> 微信小游戏错误监控
            </div>
            <div style="padding: 30px 40px 40px;">尊敬的Fundebug,
                <br> 您的微信小游戏发生了一个错误：
                <br> &nbsp;
                <div style="border-left: 5px solid #22A985; padding: 0 0 0 10px; color: #888;">
                    <font color="black">名称: </font>
                    <font color="red">Test</font>
                    <br>
                    <font color="black">信息: </font>
                    <font color="red">Hello, Fundebug!</font>
                    <br>
                </div>
            </div>
            <div style="background: #EEE; border-top: 1px solid #DDD; text-align: center; height: 90px; line-height: 90px;"><a href="http://localhost:9000/dashboard/587ecdfcbc79d36d10fabf24/error/587ece0834cb85716c8cbb61" style="padding: 8px 18px; background: #22A985; color: #FFF; border-radius: 3px;">查看详情 <span>→</span></a></div>
        </div>
    </center>
</div>