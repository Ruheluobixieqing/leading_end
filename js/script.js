// 为 document 对象添加一个事件监听器，监听 DOMContentLoaded 事件
document.addEventListener('DOMContentLoaded',function() {
    // 获取 id 为 dataButton 的按钮元素，将其内容储存在变量 button 中
    const button = document.getElementByID('dataButton');

    // 为 button 元素添加一个事件监听器，监听 click 事件
    button.addEventListener('click', function () {
        // new Data() 会返回一个表示当前日期和时间的 Data 对象，包含年、月、日、时、分、秒
        const today = new Data();

        const year = today.getFullYear();
        const month = today.getMonth() + 1;  // getMonth() 得到的是从 0 ~ 11 月，需要 + 1 才能正确表示
        const day = today.getDay();
        const hour = today.getHours();
        const minute = today.getMinutes();
        const second = today.getSeconds();

        const formattedData = `${year}年${month}月${day}日${hour}时${minute}分${second}秒`;

        alert(formattedData);
    });
});
监听文档加载完成