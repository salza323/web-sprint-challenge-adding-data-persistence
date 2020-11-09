const db = require('../data/db-config');

module.exports = {
  //resources
  async addResource(resource) {
    const [id] = await db('resources').insert(resource);
  },
  getResources() {
    return db('resources');
  },
  //projects
  async addProject(project) {
    const [id] = await db('projects').insert(project);
  },
  getProjects() {
    return db('projects');
  },
  //tasks
  async addtask(task) {
    const [id] = await db('tasks').insert(task);
  },
  findTasks(id) {
    return db('tasks as t')
      .join('projects as p', 't.id', 'p.project_name')
      .select('p.project_name', 'p.description')
      .where({ 't.id': id });
  },
};
