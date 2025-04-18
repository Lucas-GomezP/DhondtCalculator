import { createContext, useState } from "react";
import { DataParticipant } from "../types/types";

type DhondtContextType = {
  positions: number | string;
  setPositions: (positions: number | string) => void;
  participants: DataParticipant[];
  setDataParticipants: (participants: DataParticipant[]) => void;
};

export const DhondtContext = createContext<DhondtContextType>({
  positions: 0,
  setPositions: () => {},
  participants: [],
  setDataParticipants: () => {},
});

export default function DhondtContextProvider({ children }: { children: React.ReactNode }) {
  const [positions, setPositions] = useState<number | string>(0);
  const [participants, setDataParticipants] = useState<DataParticipant[]>([]);
  return (
    <DhondtContext.Provider value={{
      positions,
      setPositions,
      participants,
      setDataParticipants
    }}>{children}</DhondtContext.Provider>
  )
}