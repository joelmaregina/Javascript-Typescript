//************************* FetchAPI ****************************

document.addEventListener('click', e =>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el){
    try{
        const href = el.getAttribute('href');
        const response = await fetch(href);
        
        if (response.status !== 200 ) throw new Error ('Tem algum erro aqui');
        
        const html = await response.text();
        carregaResultado(html);
    } catch (e){
        console.log(e);
    }

    // fetch(href) // Sem o Assync/Await
    //     .then(response => {
        // if (response.status < 200 && response.status >= 300) throw new Error ('Tem algum erro aqui');
    //         return response.text()
    //     })
    //     .then(html => carregaResultado(html))
    //     .catch(e => console.error(e))
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

// // Fetch já retorna uma Promise
// fetch('p1.html')
//     .then(resposta => {
//         if(resposta.status !== 200) throw new Error ('ERRO 404 Nosso');
//         return resposta.text(); // retorna outra Promise, precisa de outro then
//     })
//     .then(html => console.log(html))
//     .catch(e => console.error(e)); 

