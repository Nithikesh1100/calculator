const themeToggle = document.getElementById('themeToggle');

const storedTheme = localStorage.getItem('theme')
if(storedTheme=='dark'){
    // light to dark
    document.documentElement.style.setProperty('--bg-color', '#040D12');
    document.documentElement.style.setProperty('--text-color', '#93B1A6');
    document.documentElement.style.setProperty('--keypad-bg-color', '#040D12');
    document.documentElement.style.setProperty('--keypad-bg-color2', '#183D3D');
    themeToggle.checked=true;
}
else{
    document.documentElement.style.setProperty('--bg-color', '#F5EEE6');
        document.documentElement.style.setProperty('--text-color', '#E6A4B4');
        document.documentElement.style.setProperty('--keypad-bg-color', '#FFF8E3');
        document.documentElement.style.setProperty('--keypad-bg-color2', '#F3D7CA');

}
themeToggle.addEventListener('change',function(){
    if(this.checked){
        // light to dark
        document.documentElement.style.setProperty('--bg-color', '#040D12');
        document.documentElement.style.setProperty('--text-color', '#93B1A6');
        document.documentElement.style.setProperty('--keypad-bg-color', '#040D12');
        document.documentElement.style.setProperty('--keypad-bg-color2', '#183D3D');
        localStorage.setItem('theme','dark')
    }
    else{
        document.documentElement.style.setProperty('--bg-color', '#F5EEE6');
        document.documentElement.style.setProperty('--text-color', '#E6A4B4');
        document.documentElement.style.setProperty('--keypad-bg-color', '#FFF8E3');
        document.documentElement.style.setProperty('--keypad-bg-color2', '#F3D7CA');

        localStorage.setItem('theme','light')
    }
})

let result=document.getElementById('result');
function append(value){
    result.value += value;
}

function backspace(){
    if(result.value=='Error'){
        result.value = '';
    }
    result.value = result.value.slice(0,-1);

}

function allClear(){
    result.value='';
}

function calculate(){
    try{
        if(result.value==''){
            result.value = '0';
        }
        result.value = eval(result.value)
    }
    catch(e){
        result.value = 'Error'
    }
}