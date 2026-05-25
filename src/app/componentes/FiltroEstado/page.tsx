type Props = {
    estado: string;
    setEstado: (value: string) => void;
}

const FiltroEstado = ({ estado, setEstado }: Props) => {

    const cambiarEstado = () => {

    if (estado === "all") {
        setEstado("alive");
    }

    else if (estado === "alive") {
        setEstado("dead");
    }

    else if (estado === "dead") {
        setEstado("unknown");
    }

    else {
        setEstado("all");
    }

}

    return (
        <button onClick={cambiarEstado}>
            Estado: {estado}
        </button>
    );
}

export default FiltroEstado;