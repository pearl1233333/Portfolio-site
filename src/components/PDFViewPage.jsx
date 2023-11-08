import React from 'react';
import PDFViewer from '../components/PDFViewer'; // PDF를 렌더링하는 컴포넌트

function PDFViewPage() {
  const pdfUrl = "../application_ver_01.pdf"
  return (
    <div>
      <PDFViewer pdfUrl={pdfUrl} />
        <div>pdf</div>
    </div>
  );
}

export default PDFViewPage;