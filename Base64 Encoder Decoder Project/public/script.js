let inpCode = document.getElementById('inpCode')
let code = document.getElementById('code')
let btnEncode = document.getElementById('btnEncode')
let btnEvaluate = document.getElementById('btnEvaluate')
let btnEncrypt = document.getElementById('btnEncrypt')


btnEncode.onclick = function(){
    
    let data = inpCode.value
    data = btoa(data)
    code.value = data

}

btnEncrypt.onclick = function(){
    
    let data = code.value
    data = encryptData(data)
    code.value = data
    
}

function encryptData(rawData){

    let newData = '';
    for (i=0; i<rawData.length; i++) {
        if (rawData[i] == rawData[i].toLowerCase()) {
            newData += rawData[i].toUpperCase();
        }
        else{newData += rawData[i].toLowerCase();
        }
    }
    return newData

}