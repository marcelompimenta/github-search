import axios from "axios"

function getRepos(request) {
    axios.get(request)
        .then(response => {
            addDataLocalStorage(response.data)
        })
        .catch(error => console.log(error))
}

function addDataLocalStorage(datas) {
    localStorage.clear()
    localStorage.setItem('repositories', JSON.stringify(datas))
}

export default getRepos 