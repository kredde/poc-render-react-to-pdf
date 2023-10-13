import MyDocument from '@/components/MyDocument';
import ReactPDF from '@react-pdf/renderer';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pdfStream = await ReactPDF.renderToStream(<MyDocument />);
  pdfStream.pipe(res);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=Allocation.pdf');
}
