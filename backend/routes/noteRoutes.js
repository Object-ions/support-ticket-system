const express = require('express');
const router = express.router({ mergeParams: true });
const { getNotes, addNote } = require('../controllers/notesController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getNotes).post(protect, addNote);

module.export = router;

// /api/tickets/:ticketId/notes
