/**
 * @api {post} auth.xyz.ir/v1/login Login
 * @apiVersion 0.1.0
 * @apiName Login
 * @apiGroup Auth
 * @apiPermission none
 *
 * @apiParam {username} Username
 * @apiParam {password} Password
 *
 * @apiSuccess {Boolean}   success            Success Flag
 * @apiSuccess {Object}   result            Result
 * @apiSuccess {String}   result.token            A JWT token will be used for authentication and authorization in all requests. This token has phoneNo, username, type, permission, sid, and aid
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "result": {
 *          token: "abcd.efghi.jkl"
 *       }
 *     }
 *
 */
function login() { return; }

/**
 * @api {post} auth.xyz.ir/v1/register Register a new user
 * @apiVersion 0.1.0
 * @apiName Register
 * @apiGroup Auth
 * @apiPermission none
 *
 * @apiParam {String} phoneNo Phone Number
 * @apiParam {String} password Password
 *
 * @apiSuccess {Boolean} success         Success Flag
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true
 *     }
 *
 */
function register() { return; }

/**
 * @api {post} auth.xyz.ir/v1/register Confirm registered user
 * @apiVersion 0.1.0
 * @apiName Confirm
 * @apiGroup Auth
 * @apiPermission none
 *
 * @apiParam {String} phoneNo Phone Number
 * @apiParam {String} code Confirmation Code
 * @apiParam {String} publicKey Public key generated automatically
 * @apiParam {String} deviceId Device ID (e.g. IMEI)
 * @apiParam {String} simSerial SimCard Serial Number
 * @apiParam {String} deviceId The Device ID (e.g. IMEI)
 *
 * @apiSuccess {Boolean} success         Success Flag
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true
 *     }
 *
 */
function confirm() { return; }


/**
 * @api {ws} api.xyz.ir/v1/ws Send Money
 * @apiVersion 0.1.0
 * @apiName SendMoney
 * @apiGroup Core
 * @apiPermission user sender
 *
 * @apiParam {Number} amount Amount to transfer (in Tomans)
 * @apiHeader {String} Authorization Authorization header (format: Bearer token)
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer abcd.efghi.jkl"
 *     }
 * @apiDescription It is a WebSocket api. To use it, send data to the following namespace/room:
 * 
 * namespace: '/transfer'
 *
 * room: 'send/req'
 *
 * When data is sent, listen on the following room for response:
 *
 * room: 'send/res'
 *
 * @apiSuccess {Boolean} success         Success Flag
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true
 *     }
 *
 */
function sendMoney() { return; }

/**
 * @api {ws} api.xyz.ir/v1/ws Receive Money
 * @apiVersion 0.1.0
 * @apiName ReceiveMoney
 * @apiGroup Core
 * @apiPermission user receiver
 *
 * @apiParam {Number} amount Amount to transfer (in Tomans)
 * @apiParam {String} id the aid (account id) of sender
 * @apiHeader {String} Authorization Authorization header (format: Bearer token)
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer abcd.efghi.jkl"
 *     }
 * @apiDescription It is a WebSocket api. To use it, send data to the following namespace/room:
 * 
 * namespace: '/transfer'
 *
 * room: 'receive/req'
 *
 * When data is sent, listen on the following room for response:
 *
 * room: 'receive/res'
 *
 * @apiSuccess {Boolean} success         Success Flag
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true
 *     }
 *
 */
function receiveMoney() { return; }

/**
 * @api {get} acc.xyz.ir/v1/transactions/last/:count Get Last Transactions
 * @apiVersion 0.1.0
 * @apiName GetTransactions
 * @apiGroup Accounting
 * @apiPermission user
 *
 * @apiParam {Number} count=1 Number of transactions to retreive. Pass 0 to get all of transactions (if it is possible)
 * @apiHeader {String} Authorization Authorization header (format: Bearer token)
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer abcd.efghi.jkl"
 *     }
 *
 * @apiSuccess {Boolean} success         Success Flag
 * @apiSuccess {Object} result         Array of transactions
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "result": {[
 *	        {
 *             id,
 *             ts,
 *             amount,
 *             status,
 *             desc,
 *          }
 *       ]}
 *     }
 *
 */
function getLastTransactions() { return; }