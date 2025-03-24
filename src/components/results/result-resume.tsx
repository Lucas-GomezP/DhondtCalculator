import { useEffect, useState } from "react"
import useDhondtContext from "../../context/use-dhondt-context"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { calculateValuesResults } from "./calculate-results"

export default function ResultResume() {
  const { positions, participants } = useDhondtContext()
  const [resumOcupated, setResumeOcupated] = useState<object>()
  useEffect(() => {
    const {resumeOcupated: newResumeOcupated} = calculateValuesResults({positions, participants})
    setResumeOcupated(newResumeOcupated)

  }, [positions, participants])

  if (!resumOcupated || participants[0].name === "" || positions === 0) return (<></>)

  return (
    <>
      <p className="font-bold">Resumen general</p>
      <table className="w-full">
        <thead>
          <tr className="text-center bg-slate-200">
            <th>Participante</th>
            <th>Bancas ocupadas</th>
          </tr>
        </thead>
        <tbody>
          {
            resumOcupated && 
              Object.keys(resumOcupated).map((key) =>{
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                const r = resumOcupated[key]
                return (
                <tr
                  className="text-center even:bg-slate-200"
                  key={key}
                >
                  <td>{key}</td>
                  <td>
                    {r}
                  </td>
                </tr>
                )
              }
            )
          }
        </tbody>
      </table>
    </>
  )
}