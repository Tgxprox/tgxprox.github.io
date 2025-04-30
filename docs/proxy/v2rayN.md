---
title: V2rayN 如何配置链式代理，TG-X 纸飞机引流工具
description: telegram 纸飞机 账号导入 批量加群 采集隐藏  定时群发 批量监听  采集可见 批量私信 批量转发 群发 飞机群发 飞机引流
---

# V2rayN 如何配置链式代理

V2rayN说明文档:https://github.com/2dust/v2rayN/wiki/Description-of-proxy-chain

把自建的代理设置为落地代理,如果需要把自建的代理设置为前置代理则反向操作即可

1. 在V2rayN添加自建的S5节点 提前记录好别名信息(cliS5)
    
    ![](../assets/v2rayN/image1.png)
    
2. 添加订阅分组
    
    ![](../assets/v2rayN/image2.png)
    
    ![](../assets/v2rayN/image3.png)
    
3. 选中新添加的分组，在此分组添加的任何代理，最终都会通过步骤1中的S5服务器发出
    
    ![](../assets/v2rayN/image4.png)
    
    例如在此分组添加一条VMESS协议的节点,并设为活动服务器开启Tun模式,此时本机IP仍然为步骤1中的S5服务器的地址（自己原来的节点是什么格式的就导入哪个就可以，原来有的可以直接使用）
    
    ![](../assets/v2rayN/image5.png)
    
    ![](../assets/v2rayN/image6.png)
    
    ![](../assets/v2rayN/image7.png)
    
    ![](../assets/v2rayN/image8.png)