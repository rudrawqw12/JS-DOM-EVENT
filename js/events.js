function makered(){
    document.body.style.backgroundColor='red';
}

const makeBlueButton=document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
    function makeBlue(){
        document.body.style.backgroundColor ='blue';
    }

    const purpleButton=document.getElementById('make-purple');
    purpleButton.onclick=function makePurple(){
        document.body.style.backgroundColor ='purple';
    }

    const pinkButton=document.getElementById('make-pink');
    pinkButton.addEventListener('click',makePink)
    function makePink(){
        document.body.style.backgroundColor='pink';
    }

    document.getElementById('make-goldenrod').addEventListener('click',function(){
        document.body.style.backgroundColor = 'goldenrod';
    })

    // function handleOnClick(){
    //     const handlerStatus=document.getElementById('handler-status');
    //     handlerStatus.innerText='Handled';
    // }