import './ProfileComponent.css'

function Profile({ res }) {

    const {
        avatar_url,
        name,
        html_url,
        followers,
        following } = res

    return (
        <>
            <div className="datas">
                <img
                    className='foto'
                    src={avatar_url}
                    alt="foto de perfil" />
                <p
                    className="name">
                    {name}
                </p>
                <a
                    href={html_url}> Ver Perfil
                </a>
                <span>
                    Seguidores - {followers}
                </span>
                <span>
                    Seguindo - {following}
                </span>
            </div>
        </>
    )
}
export default Profile