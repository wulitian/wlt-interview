#### LRU

一般来讲，LRU将访问数据的顺序或时间和数据本身维护在一个容器当中。当访问一个数据时：
该数据不在容器当中，则设置该数据的优先级为最高并放入容器中。
该数据在容器当中，则更新该数据的优先级至最高。
