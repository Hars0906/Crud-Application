butone=document.querySelector('.bone');
butone.addEventListener('click',()=>myfun1(document.querySelector('input').value));
function myfun1(Text)
{
    let div = document.createElement('div')
    div.className='dos'
    let para = document.createElement('p')
    let buttonone =document.createElement('button')
    let buttontwo =document.createElement('button')
    para.textContent=Text;
    buttonone.className='btwo'
    buttonone.textContent="Edit"
    buttonone.addEventListener('click',()=>myfun2(buttonone));
    buttontwo.className='bthree'
    buttontwo.textContent="Remove"
    buttontwo.addEventListener('click',()=>myfun3(buttontwo));
    div.appendChild(para)
    div.appendChild(buttonone)
    div.appendChild(buttontwo)
    document.querySelector('.con').appendChild(div)
    document.querySelector('input').value=""
}
function myfun2(edit)
{
    let per=edit.parentElement;
    let besidetext=edit.previousElementSibling;
    document.querySelector('input').value=besidetext.textContent;
    per.remove();
}
function myfun3(butthree)
{
let per=butthree.parentElement;
per.remove();
}
