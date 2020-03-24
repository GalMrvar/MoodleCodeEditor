window.onload = function(e) { 
    const handleTab = (e) => {
    	if(e.keyCode==9 || e.which==9){
            e.preventDefault();
           document.execCommand('insertText', false, ' '.repeat(4));
        }
    }
    const textArr = document.getElementsByClassName('felement feditor');
    Array.from(textArr).forEach(element => element.addEventListener('keydown', (e) => handleTab (e)));

};