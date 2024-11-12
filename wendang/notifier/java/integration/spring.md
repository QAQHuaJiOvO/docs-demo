## Spring

### 1. pom.xml 配置[fundebug-spring](https://mvnrepository.com/artifact/com.fundebug/fundebug-spring)依赖

```xml
<dependency>
    <groupId>com.fundebug</groupId>
    <artifactId>fundebug-spring</artifactId>
    <version>0.3.1</version>
</dependency>
```

### 2. 在项目中引入 fundebug 并配置 apikey

新增 FundebugConfig.java

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

import com.fundebug.Fundebug;
import com.fundebug.SpringConfig;

@Configuration
@Import(SpringConfig.class)
public class FundebugConfig {
	@Bean
	public Fundebug getBean() {
		return new Fundebug("apikey");
	}
}
```

注意：获取**apikey**需要[免费注册](https://www.fundebug.com/team/create)帐号并且[创建项目](https://www.fundebug.com/project/create)，注意选择对应的项目类型。

可以参考 Demo 项目[Fundebug/fundebug-spring-demo](https://github.com/Fundebug/fundebug-spring-demo)。
