import { ProjectsService } from '../../services/projects.service';

const service = new ProjectsService();

export default async function projects(req, res) {
	if (req.method === 'GET') {
		const { query } = req.query;
		try {
			const projects = await service.limit(query);
			res.status(200).json(projects);
		} catch (err) {
			res.status(500).json({ message: 'There was an error', Error: err });
		}
	}
}
