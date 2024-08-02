// api/process-data.js
import { NextApiRequest, NextApiResponse } from 'next';

const processData = async (req: NextApiRequest, res: NextApiResponse) => {
  const jsonData = req.body;
  // Process the data here
  const responseData = {
    alphabets: ['A', 'B', 'C'],
    numbers: [1, 2, 3],
    highestAlphabet: 'C',
  };
  return res.json(responseData);
};

export default processData;