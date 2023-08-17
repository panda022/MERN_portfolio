import { useEffect, useState } from "react"
// components
import PortfolioDetails from "../components/PortfolioDetails"
import PortfolioForm from "../components/PortfolioForm"
const Home = () => {
    const [portfolios, setPortfolios] = useState(null)
  
    useEffect(() => {
      const fetchPortfolios = async () => {
        const response = await fetch('/api/portfolios')
        const json = await response.json()
  
        if (response.ok) {
          setPortfolios(json)
        }
      }
  
      fetchPortfolios()
    }, [])
  
    return (
      <div className="home">
        <div className="portfolios">
          {portfolios && portfolios.map(portfolio => (
            <PortfolioDetails portfolio={portfolio} key={portfolio._id} />
          ))}
        </div>
        <PortfolioForm/>
      </div>
    )
  }
  
  export default Home