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
    return newLogic
  } )
  console.log(newMash);
};