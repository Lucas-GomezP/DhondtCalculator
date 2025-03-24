import Input from "../input";
import { DataParticipant } from "../../types/types";
import { useEffect, useState } from "react";

export default function ParticipantsForm({id, deleteParticipant, catchData}: {id: string, deleteParticipant: (id:string) => void, catchData: (data: DataParticipant) => void}) {
  const [nameData, setNameData] = useState<number | string>("")
  const [votesData, setVotesData] = useState<number | string>(0)
  const handleChangeName = (data: number | string) => {
    const newName = data
    setNameData(newName)
  }
  const handleChangeVotes = (data: number | string) => {
    const newVotes = data
    setVotesData(newVotes)
  }
  useEffect(() => {
    catchData({id: id, name: nameData, votes: votesData})
  }, [nameData, votesData])

  return (
    <div className="flex flex-row gap-2">
      <Input id={`participant-${id}-name`} title="Nombre" type="text" catchData={handleChangeName} />
      <Input id={`participant-${id}-votes`} title="Votos" type="number" catchData={handleChangeVotes} />
      <button onClick={() => deleteParticipant(id)} className="bg-slate-50 border border-slate-300 cursor-pointer hover:bg-slate-200 text-slate-900 text-sm rounded-lg p-2">X</button>
    </div>
  )
}