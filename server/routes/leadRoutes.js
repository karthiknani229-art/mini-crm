import express from 'express';
import {
  addLead,
  getLeads,
  updateLeadStatus,
  deleteLead,
} from '../controllers/leadController.js';

const router = express.Router();

router.post('/', addLead);
router.get('/', getLeads);
router.put('/:id', updateLeadStatus);
router.delete('/:id', deleteLead);

export default router;