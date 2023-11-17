import Router from 'express';
import DataController from "./dataController";
const router:Router = new Router;

router.post('/user', DataController.create);
router.get('/user', DataController.getAll);
router.get('/user/:id', DataController.getOne);
router.put('/user', DataController.update);
router.delete('/user/:id', DataController.delete);

export default router;