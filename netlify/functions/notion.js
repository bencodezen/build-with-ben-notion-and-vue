const { Client } = require('@notionhq/client')

exports.handler = async () => {
  const notion = new Client({
    auth: process.env.VUE_APP_NOTION_TOKEN
  })
  const DATABASE_ID = '9f4656aa97c8413baf78c74697e62ee4'

  try {
    const database = await notion.databases.query({
      database_id: DATABASE_ID
    })

    return {
      statusCode: 200,
      body: JSON.stringify(database)
    }
  } catch (error) {
    console.error(error)

    return {
      statusCode: 500,
      body: JSON.stringify(error)
    }
  }
}
