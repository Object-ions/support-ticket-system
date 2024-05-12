const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');
const { request } = require('express');

// Get user tickets
// GET - /api/tickets
// private
const getTickets = asyncHandler(async (req, res) => {
  // Get user using th id and JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const tickets = await Ticket.find({ user: req.user.id });

  res.status(200).json(tickets);
});

// Get single ticket
// GET - /api/tickets/:id
// private
const getTicket = asyncHandler(async (req, res) => {
  // Get user using th id and JWT
  const user = await User.findById(req.user.id);

  // If the user does't found throw a 401
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Get a single ticket by id
  const ticket = await Ticket.findById(req.params.id);

  // Check if ticket exist
  if (!ticket) {
    res.status(404);
    throw new Error('Ticket not found');
  }

  // limit only to the logged in user
  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not authorized');
  }

  res.status(200).json(ticket);
});

// Delete single ticket
// DELETE - /api/tickets/:id
// private
const deleteTicket = asyncHandler(async (req, res) => {
  // Get ticket using th id and JWT
  const ticket = await Ticket.findById(req.params.id);

  // Check if ticket exist
  if (!ticket) {
    res.status(404);
    throw new Error('Ticket not found');
  }

  // limit only to the logged in user
  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not authorized');
  }

  await Ticket.findByIdAndDelete(req.params.id);

  // returning
  res.status(200).json({ success: true });
});

// Update single ticket
// PUT - /api/tickets/:id
// private
const updateTicket = asyncHandler(async (req, res) => {
  // Get a single ticket by id
  const ticket = await Ticket.findById(req.params.id);

  // Check if ticket exist
  if (!ticket) {
    res.status(404);
    throw new Error('Ticket not found');
  }

  // limit only to the logged in user
  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not authorized');
  }

  const updatedTicket = await Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  // returning
  res.status(200).json(updatedTicket);
});

// Create new ticket
// POST - /api/tickets/new
// private
const createTicket = asyncHandler(async (req, res) => {
  const { product, description } = req.body;

  if (!product || !description) {
    res.status(400);
    throw new Error('Please add a  product and description');
  }

  // Get user using th id and JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const ticket = await Ticket.create({
    product,
    description,
    user: req.user.id,
    status: 'new',
  });

  res.status(201).json(ticket);
});

module.exports = {
  getTickets,
  getTicket,
  createTicket,
  deleteTicket,
  updateTicket,
};
