window.onload = function(e) { 
    const handleTab = (e) => {
    	if(e.keyCode==9 || e.which==9){
            const start = e.target.selectionStart;
            const val = e.target.value;
			e.preventDefault();
            e.target.value = val.substr(0, start) + "    " + val.substr(e.target.selectionEnd);
            e.target.selectionStart = e.target.selectionEnd = start + 4;
        }
    }
    const textArr = document.getElementsByClassName('felement feditor');
    Array.from(textArr).forEach(element => element.addEventListener('keydown', (e) => handleTab (e)));

};