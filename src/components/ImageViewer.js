import React from 'react';
import styles from './ImageViewer.module.css';

function ImageViewer({ currentImage }) {
  const isVideo = currentImage.filename.endsWith('.mp4');
  const filePath = `/media/${currentImage.filename}`;

  return (
    <div className={styles.stage}>
      {isVideo ? (
        <video className={styles.video} src={filePath} autoPlay loop controls />
      ) : (
        <img className={styles.image} src={filePath} alt={currentImage.description} />
      )}
    </div>
  );
}

export default ImageViewer;
