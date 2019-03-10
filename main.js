button.addEventListener('click',()=>{
    let request = new XMLHttpRequest()
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            console.log('请求和响应都完毕了')
            if(request.status >= 200 && request.status <=300){
                console.log('请求成功')
                console.log(request.responseText)
                let text = request.responseText
                let obj = window.JSON.parse(text)
                //把符合JSON语法的字符串，转换成JS对象
                console.log(obj)
                console.log(obj.note.from)
            }else if(request.status >= 400){
                console.log('请求失败')
            }
        }
    }
    request.open('GET','http://jack.com:8002/xxx')
    request.send()
    
})