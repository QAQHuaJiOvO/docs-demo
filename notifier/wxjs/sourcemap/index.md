## Source Map

> 微信小程序的Source Map功能目前只在 iOS 6.7.2 及以上版本支持。

微信小程序在打包时，会将所有 js 代码打包成一个文件，从而减少体积，加快访问速度。

然而，压缩代码的错误是很难Debug的，因为错误位置是这样的:

<div class="ErrorMetaData">
    <div class="MetaDataRow">
        <div class="MetaDataCell">
            <div class="MetaDataCellKey"><span class="MetaDataPre CellKeyText">文件</span></div>
        </div>
        <div class="MetaDataCell CellWidth99">
            <div class="MetaDataValue"><span class="MetaDataPre MetaDataValueText">app-service.js</span></div>
        </div>
    </div>
    <div class="MetaDataRow">
        <div class="MetaDataCell">
            <div class="MetaDataCellKey"><span class="MetaDataPre CellKeyText">行号</span></div>
        </div>
        <div class="MetaDataCell CellWidth99">
            <div class="MetaDataValue"><span class="MetaDataPre MetaDataValueText">13782</span></div>
        </div>
    </div>
    <div class="MetaDataRow">
        <div class="MetaDataCell">
            <div class="MetaDataCellKey"><span class="MetaDataPre CellKeyText">列号</span></div>
        </div>
        <div class="MetaDataCell CellWidth99">
            <div class="MetaDataValue"><span class="MetaDataPre MetaDataValueText">7974</span></div>
        </div>
    </div>
</div>

这时，错误的位置信息(**文件，行号和列号**)失去了价值，因为开发者很难知道它所对应的源代码位置。

Fundebug的微信小程序BUG监控支持通过Source Map还原出错位置：

<div class="ErrorMetaData">
    <div class="MetaDataRow">
        <div class="MetaDataCell">
            <div class="MetaDataCellKey"><span class="MetaDataPre CellKeyText">文件</span></div>
        </div>
        <div class="MetaDataCell CellWidth99">
            <div class="MetaDataValue"><span class="MetaDataPre MetaDataValueText">utils/util.js</span></div>
        </div>
    </div>
    <div class="MetaDataRow">
        <div class="MetaDataCell">
            <div class="MetaDataCellKey"><span class="MetaDataPre CellKeyText">行号</span></div>
        </div>
        <div class="MetaDataCell CellWidth99">
            <div class="MetaDataValue"><span class="MetaDataPre MetaDataValueText">573</span></div>
        </div>
    </div>
    <div class="MetaDataRow">
        <div class="MetaDataCell">
            <div class="MetaDataCellKey"><span class="MetaDataPre CellKeyText">列号</span></div>
        </div>
        <div class="MetaDataCell CellWidth99">
            <div class="MetaDataValue"><span class="MetaDataPre MetaDataValueText">8</span></div>
        </div>
    </div>
</div>

这样的话，开发者能够迅速定位出错的源代码。

在Fundebug控制台，只需要点击Source Map按钮，就可以切换压缩前后的堆栈：

![](https://image.fundebug.com/2018-08-24-fundebug-wechat-miniprogram-sourcemap.gif)

如果希望使用Source Map功能，用户则需要：

- 从微信小程序管理后台[下载Source Map](./download.md)文件
- [上传Source Map](./upload/index.md)文件到Fundebug




