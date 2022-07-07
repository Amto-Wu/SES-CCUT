window.addEventListener('load',function(){
    const imgbox = this.document.querySelector('.imgs')
    const imgs = imgbox.querySelectorAll('img')
    const bigImgBox = this.document.querySelector('.bigimg')

    const bigImg = bigImgBox.querySelector('img')

    for(let i = 0;i < imgs.length;i++){
        imgs[i].addEventListener('click',function(){
            bigImg.src = imgs[i].src
        })
    }

})