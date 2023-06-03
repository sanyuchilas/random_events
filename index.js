const clickBtnElement = document.querySelector('#click_me')
const containerElement = document.querySelector('.container')

const clickClickBtnElementHandler = event => {
    if (containerElement.classList.contains('animate_bg')) {
        return
    }

    containerElement.classList.add('animate_bg')
    setTimeout(() => containerElement.classList.remove('animate_bg'), 2000)
}

clickBtnElement.addEventListener('click', clickClickBtnElementHandler)