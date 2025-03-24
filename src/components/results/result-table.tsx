import { useEffect, useState } from "react"
import useDhondtContext from "../../context/use-dhondt-context"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { calculateValuesResults } from "./calculate-results"

type DataResult = {id: string, value: number}

export default function ResultTable() {
  const {positions, participants} = useDhondtContext()
  const [result, setResult] = useState<DataResult[][]>([])
  const [ocupatedPositionsIds, setOcupatedPositionsIds] = useState<string[]>([])
  useEffect(() => {
    const {result: newResult, ocupatedPositionsIds: newOcupatedPositionsIds} = calculateValuesResults({positions, participants})
    setResult(newResult)
    setOcupatedPositionsIds(newOcupatedPositionsIds)
  }, [positions, participants])

  if (result.length === 0 || participants[0].name === "" || positions === 0) return (<><p className="text-red-500 italic text-center">Complete los campos previos para ver un resultado</p></>)

  return (
    <table className="w-full">
      <thead>
        <tr className="text-center bg-slate-200">
          <th>Posición</th>
          {
            participants.map((participant) => <th key={participant.id}>{participant.name}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          result.map((row) => {
            return (
              <tr
                key={row[0].id}
                className="text-center even:bg-slate-200"
              >
                {row.map((cell) => 
                  <td 
                    key={cell.id}
                    className={`${ocupatedPositionsIds.includes(cell.id) ? "bg-green-300" : ""} `}
                  >
                    {cell.value}
                  </td>
                )}
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}