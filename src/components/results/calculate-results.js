import { DataParticipant } from "../../types/types";

export function calculateValuesResults({positions, participants}) {
  const result = []
  const length = participants.length
  for (let i = 0; i < length; i++) {
    const prevResult = []
    for (let j = 0; j < participants.length; j++) {
      const votes = participants[j].votes
      prevResult.push({id: crypto.randomUUID(), name: participants[j].name,value: Math.floor(votes / (i + 1))})
    }
    result.push(prevResult)
  }
  
  const allResult = []
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      allResult.push(result[i][j])
    }
  }
  const ocupedPositions = allResult.sort((a, b) => b.value - a.value).slice(0, positions)
  const ocupatedPositionsIds = ocupedPositions.map((position) => position.id)
  
  const resumeOcupated = {}

  ocupedPositions.forEach((position) => {
    const positionName = position.name
    resumeOcupated[positionName] = resumeOcupated[positionName] ? resumeOcupated[positionName] + 1 : 1
  })


  for (let i = 0; i < result.length; i++) {
    result[i].unshift({id: crypto.randomUUID(), name: `Posición ${i + 1}`,value: i + 1})
  }
  return {result, ocupatedPositionsIds, resumeOcupated}
}