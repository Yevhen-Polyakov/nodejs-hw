import { Router} from "express";
import { crateNote, deleteNote, getAllNotes, getNoteById, updateNote } from "../controllers/notesController.js";

const router = Router();

router.get('/notes', getAllNotes);
router.get('/notes/:noteId', getNoteById);
router.post('/notes', crateNote);
router.delete('/notes/:noteId', deleteNote);
router.patch('/notes/:noteId', updateNote);

export default router;