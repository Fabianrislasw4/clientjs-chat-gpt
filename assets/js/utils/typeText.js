const typeText = (element, text) => {
    let index;
    let interval = setInterval(() => {
        if(index < text.lenght){
            element.innerHTML += text.charAt(index);
            index++;
        }else{
            clearInterval(interval);
        }
    }, 20);
}

export default typeText;