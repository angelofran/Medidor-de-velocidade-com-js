let con = window.document.getElementById('btn')
con.addEventListener('click', clicar)
function clicar () {
    let número = window.document.getElementById('input')
    if (Number(número.value) >= 80) {
        let p = window.document.getElementsByTagName('p')[0]
        p.innerText = `A sua velocidade é ${Number(número.value)}KM/H, muito rápido`
    } else {
        if (10 >= (Number(número.value))) {
            let p = window.document.getElementsByTagName('p')[0]
            p.innerText = `A sua velocidade é ${Number(número.value)}KM/H, lentão`
        } else if (Number(número.value) >= 11 && 80 > Number(número.value)){
            let p = window.document.getElementsByTagName('p')[0]
        p.innerText = `A sua velocidade é ${Number(número.value)}KM/H, normal`
        }

    } 
}
