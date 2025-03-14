"use client"
import {FileUploaderRegular} from "@uploadcare/react-uploader/next";
import '@uploadcare/react-uploader/core.css';

type Props = {
    onUpload?: (url : string) => void;
}

export default function UploadCareButton({
    onUpload
                                         } : Props) {
    return(
        <FileUploaderRegular
            sourceList="local, camera, facebook, gdrive"
            cameraModes="photo, video"
            classNameUploader="uc-dark"
            pubkey="ae1dddc1766964ef4d2e"
            onFileUploadSuccess={(fileInfo) =>{
                if (fileInfo && fileInfo.cdnUrl && onUpload) {
                    onUpload(fileInfo.cdnUrl);
                }
            }}
        />
    )
}