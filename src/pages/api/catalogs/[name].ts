import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.query;
  if (!name || Array.isArray(name)) {
    res.status(400).send('Bad request');
    return;
  }

  // Allow only base filename, block path traversal
  const fileName = path.basename(name);
  if (!fileName.toLowerCase().endsWith('.pdf')) {
    res.status(400).send('Invalid file');
    return;
  }

  const filePath = path.join(process.cwd(), 'src', 'data', 'catalogs', fileName);
  if (!fs.existsSync(filePath)) {
    res.status(404).send('Not found');
    return;
  }

  const stat = fs.statSync(filePath);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Length', stat.size.toString());
  res.setHeader('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');

  const stream = fs.createReadStream(filePath);
  stream.pipe(res);
}
