/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags:
 *        - Authentication
 *     description: Authenticates a user and returns a JWT token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "john_doe"
 *               password:
 *                 type: string
 *                 example: "securepassword"
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Login success
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       403:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/auth/register:
 *  post:
 *      tags:
 *          - Authentication
 *      description: Create a new user account
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          username:
 *                              type: string
 *                              example: john doe
 *                          email:
 *                              type: string
 *                              example: johndoe@email.com
 *                          password:
 *                              type: string
 *                              example: password
 *      responses:
 *          200:
 *              description: User created successfully
 *          400:
 *              description: Bad Request
 *          500:
 *              description: Server error
 */
