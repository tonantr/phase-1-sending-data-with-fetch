function submitData(params1, params2) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: `${params1}`,
            email: `${params2}`
        })
    })
        .then(res => { return res.json() })
        .then((data) => { renderUsers(data) })
        .catch((error) => {
            document.querySelector('body').innerHTML = error;
        })
};

function renderUsers(data) {
    const bodyTag = document.querySelector('body');
    const pTag = document.createElement('p');
    pTag.innerHTML = data.id;
    bodyTag.appendChild(pTag);
};




