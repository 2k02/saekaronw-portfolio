const API_URL = import.meta.env.STRAPI_URL

export async function getPortfolios () {
  try {
    const response = await fetch(`${API_URL}/portfolios?populate=*`)
    return await response.json()
  } catch (error) {
    console.error("Fetching Error: " + error)
    return null
  }
}

export async function getPortfolioById (id) {
  try {
    const response = await fetch(`${API_URL}/portfolios/${id}?populate=*`)
    const { data } = await response.json()
    return data
  } catch (error) {
    console.error("Fetching Error: " + error)
    return null
  }
}