1>animationg.html为移动元素动画。
animation.js里有抽象的移动元素函数moveElement(elementID,final_x,final_y,interval)。
elementID:被移动元素; final_x、final_y:最终移动到的位置; interval: 速度/每帧时间间隔(ms)。
注意: 需要设置元素left 、top值。
2>animation2.html为简易移动导航栏。
animation2.js里有精进版moveElement函数，让移动物体不仅仅是匀速运动，而是先加速后减速（在移动方面计算路程长度，根据路程选择速度）。还有INsertAfter函数，在目标元素之后添加新元素（js库只有insertBefore）。
