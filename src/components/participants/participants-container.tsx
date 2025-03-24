import { useEffect, useState } from "react";
import SectionContainer from "../../ui/section-container";
import ParticipantsForm from "./participants-form";
import Button from "../button";
import { DataParticipant } from "../../types/types";
import useDhondtContext from "../../context/use-dhondt-context";

export default function ParticipantsContainer() {
  const [participants, setParticipants] = useState<DataParticipant[]>([{id: crypto.randomUUID(),name: "", votes: 0}])
  const {setDataParticipants} = useDhondtContext()
  const handleParticipants = (data: DataParticipant) => {
    const newParticipants = participants.map((participant) => participant.id === data.id ? data : participant)
    setParticipants(newParticipants)
  }
  const deleteParticipant = (id: string) => {
    const newParticipants = participants.filter((participant) => participant.id !== id)
    if (newParticipants.length === 0) setParticipants([{id: crypto.randomUUID(),name: "", votes: 0}])
    else setParticipants(newParticipants)
  }
  useEffect(() => {
    setDataParticipants(participants)
  }, [participants])
  return (
    <SectionContainer title="Participantes" >
      {participants.map((participant) => {
        return (
          <ParticipantsForm
            key={participant.id}
            id={participant.id}
            deleteParticipant={deleteParticipant}
            catchData={handleParticipants}
          />
        )
      })}
      <Button
        title="Añadir participante"
        accion={() => setParticipants([...participants, {id: crypto.randomUUID(),name: "", votes: 0}])}
        disabled={participants[participants.length - 1].name === "" || participants[participants.length - 1].votes === 0}
      />
    </SectionContainer>
  )
}