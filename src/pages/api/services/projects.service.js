import { projects } from './data/projects.data';

class ProjectsService {
	constructor() {
		this.projects = projects;
	}

	async get() {
		return this.projects;
	}

	async find(query) {
		const result = this.projects.filter(
			(project) =>
				project.title.toLowerCase().includes(query.toLowerCase()) ||
				project.category.title.toLowerCase().includes(query.toLowerCase()) ||
				project.technologies.find((tech) =>
					tech.title.toLowerCase().includes(query.toLowerCase())
				) ||
				project.tags.find((tag) =>
					tag.toLowerCase().includes(query.toLowerCase())
				)
		);
		if (result.length) {
			return result;
		}
	}

	async limit(query) {
		console.log(query);
		const list = this.projects.slice(0, parseInt(query));
		return list;
	}
}

export { ProjectsService };
