import { section } from "../App";
import Repositories from "../RepositoriesComponent/RepositoriesComponent";

function showRepositories(repos) {
    section.innerHTML = Object.values(repos)
        .map((item, id) => (<Repositories key={id} repository={item} />))
}

export { showRepositories }

/* NÃO FORAM INSERIDOS OS COMPONENTS NA TELA! PRECISA AJUSTAR OU REFATORAR A FUNÇÃO */