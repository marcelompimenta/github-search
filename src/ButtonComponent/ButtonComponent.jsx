import './ButtonComponent.css'

function Button({ param, func, description }) {

    return (
        <>
            <div>
                <button
                    type="button"
                    onClick={() => func(param)}>
                    {description}
                </button>
            </div>
        </>
    )
}
export default Button