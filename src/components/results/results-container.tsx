import SectionContainer from "../../ui/section-container"
import ResultResume from "./result-resume"
import ResultTable from "./result-table"

export default function ResultsContainer() {
  return (
    <SectionContainer title="Resultados">
      <ResultTable />
      <ResultResume />
    </SectionContainer>
  )
}