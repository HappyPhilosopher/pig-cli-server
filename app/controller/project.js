const { Controller } = require('egg');

class ProjectController extends Controller {
  async getTemplate() {
    const { ctx } = this;
    ctx.body = await ctx.model.Project.find();
  }
}

module.exports = ProjectController;
