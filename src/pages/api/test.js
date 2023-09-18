/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default function TestApiRoute(req, res) {
	res.status(200).json({
		message: 'Success!',
	});
}
