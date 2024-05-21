
const mainFrom=document.querySelector('.form')
const BgForm=document.querySelector('.formBg')

mainFrom.addEventListener('mouseenter', () => {
    mEnter(document.querySelector(".formBg"));
})

function mEnter(obj){
    obj.style.transform='translateX(-85%)'
    obj.style.transition='1.2s'
}
