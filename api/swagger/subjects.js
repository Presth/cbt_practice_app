/**
 * @swagger
 * /api/student/subjects:
 *  get:
 *      tags:
 *          - Subjects
 *      description: get all available subject for student
 *      responses:
 *          '200':
 *              content:
 *                application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          subjects:
 *                              type: array
 *                              items:
 *                                  type: object
 *                                  properties:
 *                                      name:
 *                                          type: string
 *                                          example: Mathematics
 *                                      code:
 *                                          type: string
 *                                          example: MAT111
 */

/**
 * @swagger
 * /api/admin/questions/{subject}/add:
 *   post:
 *      tags:
 *       - Questions
 *      description: add question to subject
 *      parameters:
 *         - in: path
 *           name: subject
 *           description: Subject UUID
 *           required: true
 *           schema:
 *              type: string
 *      requestBody:
 *        required: true
 *        content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                         question:
 *                            type: string
 *                            example: What is the capital of France?
 *                         answers:
 *                             type: array
 *                             items:
 *                                 type: object
 *                                 properties:
 *                                     id:
 *                                       type: string
 *                                       example: 1
 *                                     value:
 *                                       type: string
 *                                       example: Paris
 *
 *                         correct_answer_id:
 *                           type: string
 *                           example: 1
 *      responses:
 *         '200':
 *              description: Question added successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: Question created successfully
 *
 */
/**
 * @swagger
 * /api/admin/subjects:
 *  post:
 *    tags:
 *      - Subjects
 *    description: add subject
 *    requestBody:
 *      required: true
 *      content:
 *         application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 name:
 *                    type: string
 *                    example: Biology
 *                 code:
 *                    type: string
 *                    example: BIO101
 *                 time_allowed:
 *                    type: integer
 *                    example: 60
 *                 maxQuestions:
 *                    type: integer
 *                    example: 10
 *    responses:
 *        '200':
 *            description: Subject created successfully
 *            content:
 *                application/json:
 *                  schema:
 *                     type: object
 *                     properties:
 *                         message:
 *                          type: string
 *                          example: User created successfully
 *                         subject:
 *                          type: object
 */
