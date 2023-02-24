function draw(){
    n = document.getElementById('numbers').value
    for(let i=0;i<document.querySelectorAll('.box').length;i++)
    document.querySelectorAll('.box')[i].style.display = 'none'
    // alert(n)
    a = setTimeout(() => {
        for(i=0; i < n; i++){
            var para = document.createElement('DIV')
            para.innerText = i+1;
            document.getElementById('container').appendChild(para)
            para.classList = "box"
    
            const color = Math.floor(Math.random()*12344678).toString(16);
            para.style.backgroundColor = '#'+ color
            para.style.marginLeft = 5*(i+1) + 'px'
        }
        
    }, 10);
}

function cls(){
    // document.getElementById('container').removeChild(para)
}