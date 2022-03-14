(function () {
    const h1 = <HTMLHeadElement>document.querySelector('h1');
    h1.addEventListener('click', (): void => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        h1.style.backgroundColor = `#${randomColor}`
    })
})()