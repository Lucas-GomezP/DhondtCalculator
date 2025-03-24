import { useContext } from "react";
import { DhondtContext } from "./dhondt-context";

export default function useDhondtContext() {
  const { positions, setPositions, participants, setDataParticipants } = useContext(DhondtContext);
  return { positions, setPositions, participants, setDataParticipants };
}