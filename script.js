const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight * 0.9;
    let boxNumber = 1;

    console.clear();
    console.log(`Window Height: ${triggerBottom}`);

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        
        console.log(`Box ${boxNumber} Top: ${boxTop} ${boxTop < triggerBottom}`);

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
        
        boxNumber++;
    })
}