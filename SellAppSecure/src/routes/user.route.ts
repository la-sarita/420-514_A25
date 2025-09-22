import { Router, Request, Response } from "express";
import { User } from '../interfaces/user.interface';
import { UserController } from "../controllers/user.controller";


const router = Router();

const userController = new UserController();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retrieve a list of users
 *     description: Retrieve a list of users from the API. Can be used to populate a list of users in your system.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: John Doe
 *                   email:
 *                     type: string
 *                     exemple: jane.doe@example.com
 */
router.get('/users', userController.getAllUsers);

  
// Route pour obtenir un utilisateur par ID
router.get('/users/:id', (req: Request, res: Response) => {
    const userId = req.params.id ? parseInt(req.params.id, 10) : null ;
    // const user = users.find(u => u.id === userId);

    // if (user) {
    //     res.json(user);
    // } else {
    //     res.status(404).send('User not found');
    // }
});



export default router;