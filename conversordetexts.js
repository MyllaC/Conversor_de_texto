function converter () {
    let texto = document.querySelector('input#txt')
    let res = document.querySelector('div#res')
    res.innerHTML = ` ` 
    if (texto.value.length == 0){
        window.alert ('[ERRO] Favor adicionar seu texto!')
    } else {
        let typeofcv = document.getElementsByName('type')
        if (typeofcv[0].checked){
            res.innerHTML = `${texto.value.toUpperCase()}` 
        }
        if (typeofcv[1].checked){
            res.innerHTML = `${texto.value.toLowerCase()}`
        }
        if (typeofcv[2].checked){
            var words = texto.value.toLowerCase().split(" ");
            for (var a = 0; a < words.length; a++) {
                var w = words[a];
                words[a] = w[0].toUpperCase() + w.slice(1);
                res.innerHTML= `${words.join(" ")}`
            }
        }
    }
}