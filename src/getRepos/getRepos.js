import axios from "axios"
import { showRepositories } from "../hooks/showRepositories"

// let repos = ''

function getRepos(request) {
    axios.get(request)
        .then(response => showRepositories(response.data))
        .catch(error => console.log(error))
}

export default getRepos 