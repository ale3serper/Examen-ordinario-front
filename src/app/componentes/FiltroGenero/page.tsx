type Props = {
    genero: string;
    setGenero: (value: string) => void;
}

const FiltroGenero = ({ genero, setGenero }: Props) => {

    const cambiarGenero = () => {

    if (genero === "all") {
        setGenero("Female");
    }

    else if (genero === "Female") {
        setGenero("Male");
    }

    else if (genero === "Male") {
        setGenero("Genderless");
    }
    else if (genero === "Genderless") {
        setGenero("Unknown");
    }

    else {
        setGenero("all");
    }

}

    return (
        <button onClick={cambiarGenero}>
            genero: {genero}
        </button>
    );
}

export default FiltroGenero;