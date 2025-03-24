import ParticipantsContainer from "../components/participants/participants-container";
import PositionsToFillContainer from "../components/positions-to-fill/positions-to-fill-container";
import ResultsContainer from "../components/results/results-container";

export default function Main() {
  return (
    <main className="[grid-area:main] p-2 flex flex-col gap-2">
      <PositionsToFillContainer />
      <ParticipantsContainer />
      <ResultsContainer />
    </main>
  )
}