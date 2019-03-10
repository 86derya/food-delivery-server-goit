const Comment = require("../../modules/db/schemas/comment");

const { createdFailed, createdSuccess } = require("./configs/responses");

const createComment = (request, response) => {
  const comment = request.body;

  const newComment = new Comment(comment);

  newComment.save(function(err) {
    if (err) {
      console.log(err), createdFailed(response, err.message);
    } else {
      createdSuccess(response, newComment);
    }
  });
};

module.exports = createComment;
