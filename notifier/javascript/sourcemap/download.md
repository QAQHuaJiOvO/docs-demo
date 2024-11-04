## 允许Fundebug下载Source Map文件

如果您将Source Map文件(即.map文件)部署到生产服务器上，Fundebug则会自动下载Source Map文件，用于还原压缩代码。为了保证代码安全性，您可以通过修改网页服务器或者代理服务器的配置，仅允许Fundebug下载Source Map文件即可。

### IP

Fundebug用于下载Source Map文件的服务器IP为**120.77.45.162**和**120.79.16.115**。

### Nginx配置方式

在nginx配置文件中新增location模块，使用正则表达式匹配**.map**文件。其中**/dist/**为Source Map文件所在目录路径：


```
location ~ ^/dist/(.+)\.map$ 
{
    allow 120.77.45.162;
    allow 120.79.16.115;
    deny all;
            
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $remote_addr;
    proxy_set_header Host $host;
    proxy_pass http://192.168.59.225:8000;
}
```

### Apache配置方式

```
<FilesMatch "\.map$">
    Order deny,allow
    Deny from all
    Allow from 120.77.45.162
    Allow from 120.79.16.115
</FilesMatch>
```
