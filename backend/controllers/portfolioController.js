const Portfolio = require('../models/portfolioModel')

// GET all portfolios
const getPortfolios = async (req, res) => {
    const portfolios = await Portfolio.find({}).sort({createdAt: -1})
  
    res.status(200).json(portfolios)
  }
  

// GET a single portfolio
const getPortfolio = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such portfolio'})
    }
  
    const portfolio = await Portfolio.findById(id)
  
    if (!portfolio) {
      return res.status(404).json({error: 'No such portfolio'})
    }
  
    res.status(200).json(portfolio)
  }

// Create a new portfolio
const createPortfolio = async(req, res) => {
    const {title, description, address} = req.body
    //add new portfolio item to mongdb
    try {
      const portfolio = await Portfolio.create({title, description, address})
      res.status(200).json(portfolio)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }

// DELETE a portfolio
const deletePortfolio = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such Portfolio'})
    }
  
    const portfolio = await Portfolio.findOneAndDelete({_id: id})
  
    if(!portfolio) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(portfolio)
  }

// UPDATE a portfolio
const updatePortfolio = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such Portfolio'})
    }
  
    const portfolio = await Portfolio.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!portfolio) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(portfolio)
  }

module.exports = {
    getPortfolios,
    getPortfolio,
    createPortfolio,
    deletePortfolio,
    updatePortfolio
}