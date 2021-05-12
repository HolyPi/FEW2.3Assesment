import { useState } from 'react'
import DisplayChar from './DisplayChar'
import DisplayHome from './DisplayHome'
import './StarWars.css'

function StarWars() {
    const [number, setNum] = useState('')
    const [data, setData] = useState(null)
    const [homeworld, setHomeworld] = useState(null)
    const [chara, setCharacter] = useState([])

    async function getChar() {
        const path = `https://swapi.dev/api/people/${number}/`
        console.log(path)
        const res = await fetch(path)
        const json = await res.json()
        console.log(json)
        const name = json.name
        const height = json.height
        console.log(name, height)
        const hair = json.hair_color
        const eyes = json.eye_color
        const birth = json.birth_year
        const gender = json.gender
        const hw_res = await fetch(json.homeworld)
        const hw_json = await hw_res.json()
        const homeworld = json.name
        console.log(homeworld)
        setHomeworld(hw_json.name)
        setData({ name, height, hair, eyes, birth, gender })
    }

    return (
        <div className="StarWars">
            { data ? <DisplayChar { ...data} />  : null}
            <DisplayHome data={data ? data : null } homeworld={homeworld} />

            <form onSubmit={ e => {
                e.preventDefault()
                getChar()
            } }>
            <input
            className="enter"
            value={number}
            onChange={ e => setNum(e.target.value) }
            />
            <input className="save" type="button" value="Save" 
            onClick={() => setCharacter( chara => [ ...chara, data])}/>
            <button type="submit">Submit</button>
            </form>

            {data ? <h1>Saved</h1> : null}
            { chara.map( (char, i) => {
                return (
                    <div>
                        <p>Name: {char.name}</p>
                        <p>Height: {char.height}</p>
                        <p>Hair: {char.hair}</p>
                        <p>Eyes: {char.eyes}</p>
                        <p>Birth: {char.birth}</p>
                        <p>Gender: {char.gender}</p>
                        <DisplayHome data={data} key={char.name + i} homeworld={homeworld} />
                        <div className="border"></div>
                    </div>
                ) }) 
            }
        </div>
    )
}

export default StarWars