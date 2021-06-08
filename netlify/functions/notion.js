const { Client } = require('@notionhq/client')

exports.handler = () => {
  const notion = new Client({
    auth: process.env.VUE_APP_NOTION_TOKEN
  })

  return {
    statusCode: 200,
    body: JSON.stringify(notion)
  }
}
