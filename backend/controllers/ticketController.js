const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');

// Get user ticket
// GET - /api/tickets
// private
const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get tickets' });
});

// Create new ticket
// POST - /api/tickets/new
// private
const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Create ticket' });
});

module.exports = {
  getTickets,
  createTicket,
};
