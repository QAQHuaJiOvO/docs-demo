####测试插件


测试代码**Test.java**如下:

```java
import com.fundebug.Fundebug;

public class Test {

	public static void main(String[] args) {
		
		Fundebug fundebug = new Fundebug("apikey");
		fundebug.notify("Test", "Hello Fundebug!");

	}
}
```

运行**Test.java**即可
    
   Fundebug的控制台会收到这条错误记录:
   
   <table>
    <thead class="ErrorDataTableHead ErrorDataTableHeadFixed" style="visibility: visible; pointer-events: auto; top: 81px">
        <tr class="ErrorDataTableHeadRow">
            <th class="ErrorDataTableHeadRwoTH">
            </th>
            <th class="ErrorDataTableHeadRwoTH" >
            </th>
            <th    class="ErrorDataTableHeadRwoTH">
            </th>
            <th    class="ErrorDataTableHeadRwoTH">
            </th>
            <th    class="ErrorDataTableHeadRwoTH">
            </th>
            <th    class="ErrorDataTableHeadRwoTH">
            </th>
        </tr>
    </thead>
    <tbody class="ErrorDataTableBody">
        <tr class="ErrorDataTableBodyRow ">
            <!-- checkbox -->
            <td class="ErrorDataTableBodyCell">
                <div class="ErrorDataTableRowSelector">
                    <div class="Checkbox">
                    </div>
                </div>
            </td>
            <!-- Error Message -->
            <td class="ErrorDataTableBodyCell CellWidthForErrorDetail u-width-99">
                <a class="ErrorEventBlock">
                    <div class="ErrorEventSummaryWrapper">
                        <div class="ErrorEventSummaryContent u-paddingLeft-2">
                            <div class="SummaryContentHeadline TextTruncate"><span><span class="HeadlineErrorClass ng-binding">Test</span>
                            </div>
                            <div class="SummaryContentMessage"><span class="ng-binding">Hello, Fundebug</span></div>
                            <div class="SummaryContentMetadata"><span>大约 <span><time class="EventMetadataLastSeen ng-binding">数秒前</time></span> - <span><time class="ng-binding">数秒前</time></span></span>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </a>
            </td>
            <!-- event count -->
            <td class="ErrorDataTableBodyCell"><a href="" class="ErrorDataContent TextAlignRight FontSize1 DisplayBlock"><span class="ng-binding">1</span></a></td>
            <!-- user count -->
            <!-- the same format as event count -->
            <td class="ErrorDataTableBodyCell"><a href="" class="ErrorDataContent TextAlignRight FontSize1 DisplayBlock"><span class="ng-binding">1</span></a></td>
            <!-- Stage -->
            <td class="ErrorDataTableBodyCell">
                <div class="ErrorDataContent">
                    <div class="TextAlignCenter FontSize1" style="padding-bottom: 0px"><span class="ng-binding">生产</span></div>
                </div>
            </td>
            <!-- severity -->
            <td class="ErrorDataTableBodyCell"><a href="" class="ErrorDataContent TextAlignCenter DisplayBlock" style="line-height: 0"><span><div class="ErrorSeverity ErrorSeverityError" ><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40"></circle></svg></div></span></a></td>
        </tr>
    </tbody>
</table>

   同时，您将收到报警邮件:

   <div style="">
    <center>
        <div style="margin: 40px auto 0; width: 580px; background: #FFF; box-shadow: 0 0 10px #333; text-align:left;">
            <div style="margin: 0 20px; color: #999; border-bottom: 1px dotted #DDD; padding: 40px 0 30px; font-size: 15px; text-align: center;">
                <a href="https://www.fundebug.com"><img src="https://image.fundebug.com/fundebug-black.jpg" style="width:30%;"></a>
                <br> 专业的应用错误监控平台
            </div>
            <div style="padding: 30px 40px 40px;">尊敬的Fundebug,
                <br> 您的Java项目发生了一个错误：
                <br> &nbsp;
                <div style="border-left: 5px solid #22A985; padding: 0 0 0 10px; color: #888;">
                    <font color="black">名称: </font>
                    <font color="red">Test</font>
                    <br>
                    <font color="black">信息: </font>
                    <font color="red">Hello, Fundebug!</font>
                </div>
            </div>
            <div style="background: #EEE; border-top: 1px solid #DDD; text-align: center; height: 90px; line-height: 90px;"><a href="" style="padding: 8px 18px; background: #22A985; color: #FFF; border-radius: 3px;">查看详情 <span>→</span></a></div>
        </div>
    </center>
</div>

   