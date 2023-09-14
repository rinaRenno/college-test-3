export default function solution(content) {
  const data = content.split('\r\n')
  const newData = data.slice(2, data.length)
  console.log(`Count: ${newData.length}`) // Шаг 1

  const mash = newData.map( (log) => {
    const newLog = log.split('|')
    return newLog
  })
  
  const newMash = mash.map( (logic) => {
    const newLogic = logic.map( (cc) => {
      return cc.trim()
    })
    return newLogic.slice(1, newLogic.length - 1)
  } )
  const plants = []
  newMash.map( (pl) => plants.push(pl[0]) ).sort()
  const newPlants = String(plants.sort().map( (npl) => {
      if (npl[0] === npl[0].toUpperCase()) {
        return ' ' + npl 
      } else {
        return ' ' + npl[0].toUpperCase() + npl.substring(1)
      }
    })).trim()
  console.log(`Plants: ${newPlants}`); // Шаг 2
};