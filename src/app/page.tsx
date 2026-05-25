'use client'

import { useEffect, useState } from "react";
import { ResultCharacters } from "./types/types";
import { api } from "@/api/api";
import "./page.css"
import CharacterChulo from "./componentes/Characters/page";
import FiltroEstado from "./componentes/FiltroEstado/page";
import FiltroGenero from "./componentes/FiltroGenero/page";
import { Buscador } from "./componentes/Buscador/page";
import Paginador from "./componentes/Paginador/paginador";


const Home = () => {

  const [resultCharacters, setResultCharacters] = useState<ResultCharacters | null>(null);
  const [estado, setEstado] = useState("all");
  const [genero, setGenero] = useState("all");
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setPage(1);
  }, [estado, genero, search]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const params = new URLSearchParams();

        if (estado !== "all") params.append("status", estado);
        if (genero !== "all") params.append("gender", genero);
        if (search.trim() !== "") params.append("name", search);

        params.append("page", page.toString());

        const url = `/character?${params.toString()}`;

        const { data } = await api.get<ResultCharacters>(url);

        setResultCharacters(data);
      } catch (error) {
        console.log(error);
      }
    };

    getCharacters();
  }, [estado, genero, search, page]);

  return (
    <div className="main">

      <div className="buscar">
        <Buscador setSearch={setSearch} />
      </div>

      <div>
        <FiltroEstado estado={estado} setEstado={setEstado} />

        <FiltroGenero genero={genero} setGenero={setGenero} />

        <div className="ContainerCharacters">
          {resultCharacters?.results.map((character) => (
            <CharacterChulo key={character.id} character={character} />
          ))}
        </div>

        <Paginador
          next={!!resultCharacters?.info?.next}
          prev={!!resultCharacters?.info?.prev}
          page={page}
          setPage={setPage}
        />

      </div>

    </div>
  );
}

export default Home;