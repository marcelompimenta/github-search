import Button from "../ButtonComponent/ButtonComponent"
import idGen from "../IdGenerator/IdGenerator"

function Repositories(repository) {

    const { id, full_name, description, created_at } = repository

    return (
        <div>
            <p>{full_name}</p>
            <span>{description}</span>
            <span>{created_at}</span>
            <Button
                key={idGen()}
                func={() => { id /* parametro que vai captar o indice do objeto atual */ }}
                description={'Ver Detalhes'} />
        </div>
    )
}
export default Repositories