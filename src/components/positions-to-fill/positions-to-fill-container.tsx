import { useEffect, useState } from "react";
import SectionContainer from "../../ui/section-container";
import Input from "../input";
import useDhondtContext from "../../context/use-dhondt-context";

export default function PositionsToFillContainer() {
  const [positionsToFill, setPositionsToFill] = useState<number | string>(0)
  const {setPositions} = useDhondtContext()
  const handlePositionsToFill = (data: number | string) => {
    let newPositions = data
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