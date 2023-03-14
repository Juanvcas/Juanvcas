import { ProjectsService } from '../services/projects.service';

const service = new ProjectsService();

export default async function projects(req, res) {
	if (req.method === 'GET') {
		try {
			const projects = await service.get();
			res.status(200).json(projects);
		} catch {
			res.status(500).json({ message: 'There was an error' });
		}
	}
}
