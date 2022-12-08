module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ProjectSchema = new Schema({
    username: {
      type: String
    },
    password: {
      type: String
    }
  });

  return mongoose.model('Project', ProjectSchema, 'project');
};
