import { useEffect, useState } from "react"
import useDhondtContext from "../../context/use-dhondt-context"
import { calculateValuesResults } from "./calculate-results"

export default function ResultResume() {
  const { positions, participants } = useDhondtContext()
  const [resumOcupated, setResumeOcupated] = useState<object>()
  useEffect(() => {
    const {resumeOcupated: newResumeOcupated} = calculateValuesResults({positions, participants})
    setResumeOcupated(newResumeOcupated)

  }, [positions, participants])
  return (
    <table className="w-full">
      <thead>
        <tr className="text-center bg-slate-200">
          <th>Participante</th>
          <th>Bancas ocupadas</th>
        </tr>
      </thead>
      <tbody>
        {
          resumOcupated && Object.keys(resumOcupated).map((key) => <tr className="text-center even:bg-slate-200" key={key}><td>{key}</td><td>{resumOcupated[key]}</td></tr>)
        }
      </tbody>
    </table>
  )
}