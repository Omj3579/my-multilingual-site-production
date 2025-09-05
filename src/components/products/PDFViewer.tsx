import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import styles from './PDFViewer.module.css';

interface PDFViewerProps {
    fileUrl: string;
    // CSS height value for the viewer container (e.g. '80vh', '1200px')
    height?: string;
    // CSS width value for the viewer container (e.g. '95%', '1200px')
    width?: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ fileUrl, height = '120vh', width = '95%' }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    // Provide a slightly larger container so a portion of the next PDF page is visible
    // which creates a "real page" feel (page + partial next page).
    // height and width are passed into the CSS variables below

    // When the viewer renders, the pages are stacked vertically. We add a small bottom
    // margin to each page so the following page peeks through when the container height
    // shows more than one page worth of content.
    return (
        <div className={styles.wrapper}>
            <style>{`:root { --pdf-width: ${width}; --pdf-height: ${height}; }`}</style>
            <div className={`${styles.container} ${styles.pageSpacing}`}>
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                    <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
                </Worker>
            </div>
        </div>
    );
};

export default PDFViewer;
