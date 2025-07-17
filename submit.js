export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, q1, q2 } = req.body;
    console.log("New Submission:", { name, email, q1, q2 });
    res.status(200).json({ message: "Submission successful" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
