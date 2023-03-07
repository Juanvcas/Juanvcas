export default function app(req, res) {
	if (req.method === 'GET') {
		res.status(200).json({ message: "Welcome to the Juanvcas's API" });
	} else {
		res.status(500).json({ message: "This API can't be modify" });
	}
}
