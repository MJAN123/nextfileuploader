
import React, {useCallback} from 'react'
import styles from  '../../styles/Home.module.scss'
import {useDropzone} from 'react-dropzone'
export default function Home() {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, accept: 'image/jpeg,image/png'})
  return (
    <div className={styles.uploaderContainer}>
        <div className={styles.uploadSection}>
            <div className={styles.input} {...getRootProps()}>
                <input {...getInputProps()} />
                <div className={styles.uploadIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                        <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                    </svg>
                    <div className={styles.uploadMessage}>
                    Click anywhere in the box to upload file
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.fileSection}>

        </div>
    </div>
  )
}
