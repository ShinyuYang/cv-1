let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/*你好,我是一名前端新手
*接下来要演示一下前端的功底
*首先准备一个div
*/
#div1{
  border:1px solid red;
  width:200px;
  height:200px;
}
/*接下来把div变成一个八卦图
*ps
*首先把div外轮廓变成一个圆
*/
#div1{
  border-radius:50%;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
  border:none; 
}
/*八卦是阴阳形成的
*左白右黑
*/
#div1{
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 000%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个圆圈*/
#div1::before{
  width:100px;
  height:100px;
  top:0;
  left:50%;
  transform:translateX(-50%);
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
  border-radius:50%;
}
#div1::after{
  width:100px;
  height:100px;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  background:radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
  border-radius:50%;
}
`;
//
//before与after在第一个以及最后一个元素加上子元素1,2,相当于span,但由于是css加的,所以是伪元素
//string=string.replace(/\n/g,"<br>")//这里是把所有回车变为br(正则表达式)
let string2 = "";
let n = 0;
// demo.innerHTML=string.substring(0,n);//这句api作用是在demo里面写字
// setInterval(()=>{
//     n=n+1
//     demo.innerHTML=n;
// },1000);
let step = ()=>{
    setTimeout(()=>{
        if (string[n] === "\n") string2 += "<br>";
        else if (string[n] === " ") string2 += "&nbsp";
        else string2 += string[n];
        //是回车就不照搬
        //不是回车就照搬,
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 50);
}; //与setInternal相比好处是可以随时停止
step();

//# sourceMappingURL=index.de158e3a.js.map
