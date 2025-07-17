export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, q1, q2 } = req.body;
    console.log('Received:', { name, email, q1, q2 });
    res.status(200).json({ message: 'Data received successfully' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
