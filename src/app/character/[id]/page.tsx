"use client"



import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import "./page.css"
import { Character } from "@/app/types/types"
import { api } from "@/api/api"


const personajeDetalle= () =>{

    const {id} = useParams()
    const idNew = String(id)
    const [error,setError] = useState<string>("")
    const [personaje,setPersonaje]= useState<Character|null>(null)
    const router = useRouter()
      
    useEffect(()=>{
       if(id){
            api.get(`/character/${idNew}`).then((e)=>{
               setPersonaje(e.data)
           })
           .catch((e)=>{
               setError(e.message )
           })
           
          
       }
      
     },[id])
    return(
        <div className="personajeContainer">
        
            <div className="info">
            <h1>Nombre: {personaje?.name} </h1>
            <h2>Genero:{personaje?.gender} </h2>
            <h2>Status: {personaje?.status}</h2>
            <h2>Especie:{personaje?.species} </h2>
            <h2>ID:{personaje?.id} </h2>
            <h2>Origen:{personaje?.origin.name} </h2>
            <h2>Ubicacion:{personaje?.location.name} </h2>
            <button onClick={router.back}> ATRAS </button>
            </div>
           
        </div>
  
    )
    
}
export default personajeDetalle