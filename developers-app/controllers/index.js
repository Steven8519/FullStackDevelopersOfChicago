/**
 * Created by stevenmcdonald on 3/6/17.
 */
const UserController = require("../controllers/UserController");
const CommentController = require("../controllers/CommentController");

module.exports = {
    user: UserController,
    comment: CommentController
}
