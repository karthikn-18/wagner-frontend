import React, { useState } from 'react';
import { Button, Alert } from 'flowbite-react';

const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB
const ALLOWED_FILE_TYPES = ['image/png', 'image/jpeg'];

const FileUploader = ({ currentFile, onFileSelect, onFileRemove, accept, maxSize, error, preview, previewSize }) => {
    const [fileError, setFileError] = useState(null);
    const [filePreview, setFilePreview] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (!ALLOWED_FILE_TYPES.includes(file.type)) {
                setFileError('Only PNG and JPG images are allowed');
                onFileRemove();
                return;
            }

            if (file.size > MAX_FILE_SIZE) {
                setFileError('Image size must be less than 4MB');
                onFileRemove();
                return;
            }

            setFilePreview(URL.createObjectURL(file));
            onFileSelect(file);
            setFileError(null);
        }
    };

    const handleRemoveFile = () => {
        setFilePreview(null);
        onFileRemove();
    };

    return (
        <div className="space-y-2">
            {filePreview && preview && (
                <div className={`w-${previewSize} h-${previewSize} rounded-lg overflow-hidden`}>
                    <img src={filePreview} alt="file preview" className="object-cover w-full h-full" />
                </div>
            )}

            <div className="flex items-center space-x-4">
                <input
                    type="file"
                    accept={accept}
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                />
                <label htmlFor="file-upload">
                    <Button variant="outline" component="span">
                        {currentFile ? 'Change Image' : 'Upload Image'}
                    </Button>
                </label>
                {currentFile && (
                    <Button variant="outline" onClick={handleRemoveFile}>
                        Remove Image
                    </Button>
                )}
            </div>

            {fileError && <Alert variant="destructive">{fileError}</Alert>}
            {error && <Alert variant="destructive">{error}</Alert>}
        </div>
    );
};

export default FileUploader;
