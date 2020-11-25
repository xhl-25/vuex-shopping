// 自执行函数
(function(){
    function resize(){
        // 设计稿宽度
        const designWidth = 375;
        // 屏幕宽度
        const windowWidth = window.innerWidth;
        // html根元素
        const html = document.documentElement;
        // 计算
        html.style.fontSize = (100/designWidth * windowWidth) + 'px';
    }
    resize();

    // 动态监听屏幕宽度
    // 判断移动端横竖屏事件onorientationchange，若不是，就执行动态监听屏幕宽度
    window.addEventListener('onorientationchange' in window?'onorientationchange':'resize',resize);
    
    // 当初始的 HTML 文档被完全加载和解析完成之后，
    // DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完成加载。
    // DOMContentLoaded，文档加载完毕，确保能执行
    window.addEventListener('DOMContentLoaded',resize)
})(document,window)


