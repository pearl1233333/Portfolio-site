import React from 'react';
import { Document, Page } from 'react-pdf';

function PDFViewer({pdfUrl}) {
  return (
    <div>
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
        <div>pdf</div>
      </Document>
    </div>
  );
}

export default PDFViewer;