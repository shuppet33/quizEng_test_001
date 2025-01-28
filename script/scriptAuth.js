const buttonReg = document.getElementById('buttonReg')
const buttonsGroup = document.getElementById('buttonGroup')
const groupItem = document.querySelectorAll('.groupItem')



buttonReg.addEventListener('click', (e) => {
    if (    buttonsGroup.style.display === 'none') {
        buttonsGroup.style.display = 'block'
    } else {
        buttonsGroup.style.display = 'none'
    }
})

groupItem.forEach(item => item.addEventListener('click', (e) => {
    buttonsGroup.style.display = 'none'
}))

document.addEventListener('click', (e) => {
    if(!e.target.closest('.link')) {
        buttonsGroup.style.display = 'none'
    }
})

