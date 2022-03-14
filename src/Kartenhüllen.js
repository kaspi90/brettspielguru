import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs'
import kartenhuellen_uebersicht from './kartenhuellen_uebersicht.jpeg';


const PDFViewerBrettspielguru = () => {
    return (
        <PDFViewer
            document={{
                url: 'https://www.brettspielguru.de/wp-content/uploads/2021/07/Kartenhu%CC%88llen_U%CC%88bersicht-2.pdf',
            }}
        />
    )
}



function Kartenhüllen() {
    return (
        <div>
            <img src={kartenhuellen_uebersicht} />
            <ul>
                <li>Herunterladen</li>
                <li>Öffnen</li>
                <li>Drucken 100% oder auf Bildschirm vergrößern (Controll Dice 1 cm)</li>
                <li>Karten auflegen und richtige Kartenhüllen Größe finden</li>
            </ul>
        </div>
    )
}

export default Kartenhüllen;