import Link from "next/link";
import { Character } from "@/app/types/types";
import "./page.css"

const CharacterChulo = ({ character }: { character: Character }) => {
  return (
    <Link href={`/character/${character.id}`}>
      <div className="ContainerChulangano">
        <img src={character.image} alt={character.name} />
        <div className="CharacterInfo">
          <h1>{character.name}</h1>
          <p>Genero: {character.gender}</p>
          <p>Estado: {character.status}</p>
        </div>
      </div>
    </Link>
  );
};

export default CharacterChulo;