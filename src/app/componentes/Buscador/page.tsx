import { useState } from "react"

type Props = {
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const Buscador = ({ setSearch }: Props) => {
    const [name, setName] = useState<string>("")

    const handleSearch = () => {
        setSearch(name)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch()
        }
    }

    return (
        <div className="buscadorGeneral">
            <p>Nombre:</p>

            <input
                value={name ?? ""}   
                onChange={(e) => setName(e.target.value)}
                onKeyDown={handleKeyDown}
            />

            <button onClick={handleSearch}>
                Buscar
            </button>
        </div>
    )
}