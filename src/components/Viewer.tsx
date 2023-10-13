import { PDFViewer } from '@react-pdf/renderer';
import dynamic from 'next/dynamic';
import MyDocument from './MyDocument';

export default function Viewer() {
  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <MyDocument />
    </PDFViewer>
  );
}
