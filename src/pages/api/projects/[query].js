import { stringify } from 'uuid';
import { ProjectsService } from '../services/projects.service';

const service = new ProjectsService();

export default async function projects(req, res) {
	if (req.method === 'GET') {
		const { query } = req.query;
		try {
			const projects = await service.find(query);
			projects
				? res.status(200).json(projects)
				: res.status(404).json({ message: 'Project not found' });
		} catch (err) {
			res.status(500).json({ message: 'There was an error', Error: err });
		}
	}
}
