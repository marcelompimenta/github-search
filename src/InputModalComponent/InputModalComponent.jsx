import Button from "../ButtonComponent/ButtonComponent"
import idGen from "../IdGenerator/IdGenerator"

function InputModal({ link, func }) {
    return (
        <div>
            <label htmlFor="link">Clonar : </label>
            <input type="text" className="link" value={link} />
            <Button key={idGen()} onClick={() => { console.log('cliquei no botão') }} />
        </div>
    )
}
export default InputModal