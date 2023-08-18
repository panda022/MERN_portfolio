import { PortfoliosContext } from "../context/PortfoliosContext"
import { useContext } from "react"

export const usePortfoliosContext = () => {
  const context = useContext(PortfoliosContext)

  if(!context) {
    throw Error('usePortfoliosContext must be used inside an PortfoliosContextProvider')
  }

  return context
}