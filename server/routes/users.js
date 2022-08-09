import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('hello World');
});

export default router;
