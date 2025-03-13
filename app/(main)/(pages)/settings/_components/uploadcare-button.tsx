"use client"
import {FileUploaderRegular} from "@uploadcare/react-uploader/next";
import '@uploadcare/react-uploader/core.css';

export default function UploadCareButton() {
    return(
        <FileUploaderRegular
            sourceList="local, camera, facebook, gdrive"
            cameraModes="photo, video"
            classNameUploader="uc-dark"
            pubkey="ae1dddc1766964ef4d2e"
        />
    )
}