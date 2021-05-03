async function reverseText(className) {
    let textWrapper = document.querySelector(className)
    const textLength = textWrapper.textContent.length
    let text = textWrapper.textContent
    if (textLength > 0) {
        textWrapper.innerHTML = text.replace(/\S/g, "<span class='letter $&'>$&</span>");
        anime.timeline({ loop: false })
            .add({
                targets: '#logo .letter',
                translateX: [0, -30],
                opacity: [1, 0],
                easing: "easeInExpo",
                duration: 1100,
                delay: (el, i) => 30 * i
            })
        await new Promise(r => setTimeout(r, 30 * textLength))
        text = textWrapper.textContent.split("").reverse().join("")
        textWrapper.innerHTML = text.replace(/\S/g, "<span class='letter $&'>$&</span>");
        anime.timeline({ loop: false })
            .add({
                targets: '#logo .letter',
                translateX: [40, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1200,
                delay: (el, i) => 100 + 30 * i
            })
        await new Promise(r => setTimeout(r, 100 + 30 * textLength))
    }
}

let logoReverse = false

document.querySelector('#logo').addEventListener('mouseenter', async function () {
    if(!logoReverse){
        logoReverse = true
        await reverseText('#logo')
        logoReverse = false 
    }
})