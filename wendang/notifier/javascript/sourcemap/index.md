#### Source Map

部署JavaScript脚本前，开发者通常会使用[UglifyJS2](https://github.com/mishoo/UglifyJS2)等工具对代码压缩变换，从而减少体积，加快访问速度。

然而，压缩代码的错误是很难Debug的，因为错误位置是这样的:

<div class="ErrorMetaData">
    <div class="MetaDataRow">
        <div class="MetaDataCell">
            <div class="MetaDataCellKey"><span class="MetaDataPre CellKeyText">文件</span></div>
        </div>
        <div class="MetaDataCell CellWidth99">
            <div class="MetaDataValue"><span class="MetaDataPre MetaDataValueText">https://example.com/app.js</span></div>
        </div>
    </div>
    <div class="MetaDataRow">
        <div class="MetaDataCell">
            <div class="MetaDataCellKey"><span class="MetaDataPre CellKeyText">行号</span></div>
        </div>
        <div class="MetaDataCell CellWidth99">
            <div class="MetaDataValue"><span class="MetaDataPre MetaDataValueText">1</span></div>
        </div>
    </div>
    <div class="MetaDataRow">
        <div class="MetaDataCell">
            <div class="MetaDataCellKey"><span class="MetaDataPre CellKeyText">列号</span></div>
        </div>
        <div class="MetaDataCell CellWidth99">
            <div class="MetaDataValue"><span class="MetaDataPre MetaDataValueText">32490</span></div>
        </div>
    </div>
</div>

这时，错误的位置信息(**文件，行号和列号**)失去了价值，因为开发者很难知道它所对应的源代码位置。

Fundebug支持使用Source Map还原真正的错误位置:

<div class="ErrorMetaData">
    <div class="MetaDataRow">
        <div class="MetaDataCell">
            <div class="MetaDataCellKey"><span class="MetaDataPre CellKeyText">文件</span></div>
        </div>
        <div class="MetaDataCell CellWidth99">
            <div class="MetaDataValue"><span class="MetaDataPre MetaDataValueText">../client/user.js</span></div>
        </div>
    </div>
    <div class="MetaDataRow">
        <div class="MetaDataCell">
            <div class="MetaDataCellKey"><span class="MetaDataPre CellKeyText">行号</span></div>
        </div>
        <div class="MetaDataCell CellWidth99">
            <div class="MetaDataValue"><span class="MetaDataPre MetaDataValueText">135</span></div>
        </div>
    </div>
    <div class="MetaDataRow">
        <div class="MetaDataCell">
            <div class="MetaDataCellKey"><span class="MetaDataPre CellKeyText">列号</span></div>
        </div>
        <div class="MetaDataCell CellWidth99">
            <div class="MetaDataValue"><span class="MetaDataPre MetaDataValueText">29</span></div>
        </div>
    </div>
</div>

这样的话，开发者能够迅速定位出错的源代码。另外，**Fundebug还支持展示出错的代码块**，帮助开发者更快地解决问题。

如果希望使用Source Map功能，用户需要[生成Source Map](./generate/index.md)。默认情况下，Fundebug会根据压缩代码中的sourceMappingURL下载Source Map文件。您可以配置[允许Fundebug下载Source Map文件](./download.md)。如果用户不希望公开Source Map，则可以主动[上传Source Map](./upload/index.md)。




