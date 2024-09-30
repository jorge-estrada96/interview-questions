const axios = require('axios')


async function  main () {
  const response = await axios.get('https://jsonmock.hackerrank.com/api/football_matches?year=2015&&competition=UEFA Champions League&page=1')
  const totalPages = response.data.total_pages
  let matches = response.data.data
  const pages = Array.from(Array(totalPages).keys())

  for (const page of pages) {
    if (page + 1 !== 1) {
      const response = await axios.get('https://jsonmock.hackerrank.com/api/football_matches?year=2015&competition=UEFA Champions League&page=' + page)
      matches.push(...response.data.data)
    }
  }

  

  const teamMatches = matches.reduce((acc, match) => {
    acc[match.team1] = (acc[match.team1] || 0) + 1
    acc[match.team2] = (acc[match.team2] || 0) + 1
    return acc
  }, {})
  
  const result = Object.keys(teamMatches).filter(key => teamMatches[key] === 7)

  console.log(result)
} 

main()