// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
/*
这里的所有内容
都是注释。
*/
// 这是一条注释。


// 设置图片切换
let myImage=document.querySelector('img');

myImage.onclick=function(){//myImage变量的 onclick 事件与一个匿名函数绑定
    let mySrc= myImage.getAttribute('src');
    if(mySrc==='images/re.jpg'){
        myImage.setAttribute('src','images/firefox-icon.png');
        }else{
        myImage.setAttribute('src','images/re.jpg');       
        }
};

// 设置个性化欢迎信息
// 获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = '我的八你真帅，' + myName;
    }
  };


  
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '我的八你真帅，' + storedName;
  }

// 为按钮设置 onclick 事件处理器：
myButton.onclick=function(){//变量的 onclick 事件与一个匿名函数绑定
    setUserName();
}
