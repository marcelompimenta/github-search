import { useEffect, useState } from "react"
import Profile from "./ProfileComponent/ProfileComponent"
import Button from "./ButtonComponent/ButtonComponent"
import idGen from "./IdGenerator/IdGenerator"
import getRepos from "./getRepos/getRepos"
export const section = document.querySelector('section')

function App() {

    const [request, setRequest] = useState([])

    useEffect(() => {
        async function handleRequests() {
            const url = 'https://api.github.com/users/marcelompimenta'
            setRequest(await fetch(url).then(res => res.json()))
        }
        handleRequests()
    }, [])

    return (
        <>
            <Profile
                key={idGen()}
                res={request} />
            <Button
                key={idGen()}
                param={request.repos_url}
                func={getRepos}
                description={'Ver Repositórios'} />
            <section>
            </section>
        </>

    )
}
export default App