const fetch = require('node-fetch')

module.exports = async (req, res) => {
  const url = 'https://discordapp.com/api/guilds/784827324054110228/widget.json'

  const widget = await fetch(url)
  const data = await widget.json()

  res.json(data)
}
