const express = require("express");
const router = express.Router();
const {
    handleGetAllUsers, 
    handleGetUserById, 
    handleUpdateUserbyId, 
    handleDeleteUserById,
    handleCreateNewUser
} = require("../controllers/user");



router.route("/")
.get(handleGetAllUsers)
.post(handleCreateNewUser);

router.route('/:id')
    .get(handleGetUserById)

    .patch(handleUpdateUserbyId)

    .delete(handleDeleteUserById);


//global catches -> error handling middleware
// router.use((err, req, res, next) => { // will be called if there is any exception above
//     res.json({
//         message: "Server is not responding"
//     })
// });


module.exports = router;