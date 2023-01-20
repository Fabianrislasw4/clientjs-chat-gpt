const loader = (element, loadInterval) => {
    element.textContent = ''
    loadInterval = setInterval(() => {
        element.textContent += '.';
        element.textContent === '...' && (element.textContent = '');


    }, 300);
}

export default loader;