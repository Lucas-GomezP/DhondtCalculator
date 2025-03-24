import { useEffect, useState } from "react";
import SectionContainer from "../../ui/section-container";
import Input from "../input";
import { DataInput } from "../../types/types";
import useDhondtContext from "../../context/use-dhondt-context";

export default function PositionsToFillContainer() {
  const [positionsToFill, setPositionsToFill] = useState<DataInput>(0)
  const {setPositions} = useDhondtContext()
  const handlePositionsToFill = (data: DataInput) => {
    let newPositions = data
    console.log(newPositions)
    if (!newPositions) newPositions = 0
    setPositionsToFill(newPositions)
  }
  useEffect(() => {
    setPositions(positionsToFill)
  }, [positionsToFill])
  return (
    <SectionContainer title="Bancas a ocupar" >
      <Input id="positions-to-fill" title="Bancas a ocupar" type="number" catchData={handlePositionsToFill} />
    </SectionContainer>
  )
}