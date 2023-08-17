const express = require('express')
//const Portfolio = require('../models/portfolioModel')
const {
  getPortfolios,
  getPortfolio,
  createPortfolio,
  deletePortfolio,
  updatePortfolio
} = require('../controllers/portfolioController')


const router = express.Router()

// GET all portfolios
router.get('/', getPortfolios)

// GET a single portfolio
router.get('/:id', getPortfolio)

// create a new portfolio
router.post('/', createPortfolio)

// DELETE a portfolio
router.delete('/:id', deletePortfolio)

// UPDATE a portfolio
router.patch('/:id', updatePortfolio)

module.exports = router

