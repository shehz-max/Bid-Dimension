'use client';

import React, { useState, useRef } from 'react';
import { Upload, FileText, X, AlertCircle } from 'lucide-react';

export interface FileDropzoneProps {
  onFilesSelected: (files: File[]) => void;
  maxFiles?: number;
  maxSizeMB?: number;
  acceptedTypes?: string[];
  files?: File[];
  onRemoveFile?: (index: number) => void;
  className?: string;
}

export const FileDropzone: React.FC<FileDropzoneProps> = ({
  onFilesSelected,
  maxFiles = 5,
  maxSizeMB = 50,
  acceptedTypes = ['.pdf', '.dwg', '.rvt', '.png', '.jpg', '.jpeg'],
  files = [],
  onRemoveFile,
  className = '',
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateAndAddFiles = (newFiles: FileList | File[]) => {
    setErrorMessage(null);
    const validFiles: File[] = [];
    const maxSizeBytes = maxSizeMB * 1024 * 1024;

    for (let i = 0; i < newFiles.length; i++) {
      const file = newFiles[i];
      if (file.size > maxSizeBytes) {
        setErrorMessage(`File "${file.name}" exceeds the maximum size of ${maxSizeMB}MB.`);
        return;
      }
      validFiles.push(file);
    }

    if (files.length + validFiles.length > maxFiles) {
      setErrorMessage(`Maximum ${maxFiles} files allowed.`);
      return;
    }

    onFilesSelected(validFiles);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndAddFiles(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndAddFiles(e.target.files);
    }
  };

  return (
    <div className={`w-full flex flex-col gap-4 ${className}`}>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center ${
          isDragOver
            ? 'border-bd-blue bg-[#EBF3FA] scale-[1.01]'
            : 'border-[#4A8AB8]/40 bg-[#EBF3FA]/50 hover:border-bd-blue hover:bg-[#EBF3FA]'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={acceptedTypes.join(',')}
          onChange={handleFileChange}
          className="hidden"
        />

        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-bd-blue mb-4 border border-[#4A8AB8]/30 shadow-sm">
          <Upload className="w-6 h-6" />
        </div>

        <h4 className="font-display font-semibold text-lg text-bd-navy mb-1">
          Drag & drop your plans here
        </h4>
        <p className="font-body text-sm text-bd-gray mb-3">
          or <span className="text-bd-blue underline font-semibold">click to browse</span>
        </p>

        <span className="font-mono text-xs text-bd-gray/80">
          Accepted formats: PDF, DWG, RVT, PNG, JPG (up to {maxSizeMB}MB)
        </span>
      </div>

      {/* Error state */}
      {errorMessage && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-600 text-xs font-mono rounded-lg">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Selected files list */}
      {files.length > 0 && (
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-bd-navy font-semibold uppercase tracking-wider">
            Uploaded Files ({files.length}):
          </span>
          <div className="flex flex-col gap-2">
            {files.map((file, idx) => (
              <div
                key={`${file.name}-${idx}`}
                className="flex items-center justify-between p-3 bg-[#F8FAFC] border border-gray-200 rounded-lg text-sm text-bd-navy shadow-xs"
              >
                <div className="flex items-center gap-3 truncate">
                  <FileText className="w-4 h-4 text-bd-blue shrink-0" />
                  <span className="truncate font-body text-xs font-medium text-bd-navy">{file.name}</span>
                  <span className="font-mono text-[10px] text-bd-gray shrink-0">
                    ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                  </span>
                </div>
                {onRemoveFile && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveFile(idx);
                    }}
                    className="p-1 text-bd-gray hover:text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
