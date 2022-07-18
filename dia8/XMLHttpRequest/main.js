//***************** XMLHttpRequest + PROMISSES ********************
//*************************** AJAX ********************************

const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true); // GET | URL | Síncrono ou Assincrono(True)
        xhr.send(); //Caso fosse um POST, mandaria os dados (ex: de um form)
    
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            } else{
                reject(xhr.statusText); // xhr.status = O código do erro (300 a ˜500)
            }
        })
    });
}
document.addEventListener('click', e =>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el){
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href
    };

    try {
        const response = await request(objConfig);
        carregaResultado(response);
    } catch (e){
        console.log(e)
    }

    // request(objConfig).then(response => {
    //     carregaResultado(response);
    // }).catch(error => console.log(error)); => Se fosse sem o Async/Await
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}