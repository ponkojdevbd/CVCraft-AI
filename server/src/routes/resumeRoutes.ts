import { Router } from 'express'
import { authMiddleware } from '../middleware/authMiddleware'
import { saveResume, getResumes, getResume, deleteResume, suggest } from '../controllers/resumeController'

const router = Router()

router.post('/', authMiddleware, saveResume)
router.get('/', authMiddleware, getResumes)
router.get('/:id', authMiddleware, getResume)
router.delete('/:id', authMiddleware, deleteResume)
router.post('/ai/suggest', authMiddleware, suggest)

export default router