/**
 * @swagger
 * /api/student/test/{subject}/start:
 *    post:
 *      tags:
 *          - Test
 *      description: Start student exam
 *      parameters:
 *          - in: path
 *            name: subject
 *            required: true
 *      responses:
 *          200:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                              subject:
 *                                  type: object
 *                                  properties:
 *                                      name:
 *                                          type: string
 *                                          example: biology
 *                                      code:
 *                                          type: string
 *                                          example: bio111
 *                                      time_allowed:
 *                                          type: integer
 *                                          example: 12
 *
 */
