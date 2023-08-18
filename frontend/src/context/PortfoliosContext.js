import { createContext, useReducer } from 'react'

export const PortfoliosContext = createContext()

export const portfoliosReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PORTFOLIOS':
      return { 
        portfolios: action.payload 
      }
    case 'CREATE_PORTFOLIO':
      return { 
        portfolios: [action.payload, ...state.portfolios] 
      }
    case 'DELETE_PORTFOLIO':
      return { 
        portfolios: state.portfolios.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const PortfoliosContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(portfoliosReducer, { 
    portfolios: null
  })
  
  return (
    <PortfoliosContext.Provider value={{ ...state, dispatch }}>
      { children }
    </PortfoliosContext.Provider>
  )
}