
// pop-up
let previewContainer = document.querySelector('.boxes-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.boxes-container .box').forEach(product =>{
    product.onclick = () => {
        previewContainer.style.display = "flex";
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let tartget = preview.getAttribute('data-target');
            if(name == tartget) {
                preview.classList.add('active');
            }
        })
    }
})
previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        previewContainer.style.display = "none";
    }
})