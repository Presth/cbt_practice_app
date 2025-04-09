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
