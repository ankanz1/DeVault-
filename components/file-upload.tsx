"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, X, CheckCircle } from "lucide-react"
import { useFileStorage } from "@/hooks/use-file-storage"
import { UploadLoader } from "./upload-loader"
import { toast } from "sonner"

export function FileUpload() {
  const { uploadFile, isUploading, uploadProgress, uploadStage, currentFileName } = useFileStorage()
  const [dragActive, setDragActive] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = Array.from(e.dataTransfer.files)
    setSelectedFiles((prev) => [...prev, ...files])
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setSelectedFiles((prev) => [...prev, ...files])
  }

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      toast.error("Please select files to upload")
      return
    }

    try {
      for (const file of selectedFiles) {
        await uploadFile(file)
        toast.success(`${file.name} uploaded successfully!`)
      }
      setSelectedFiles([])
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Upload failed")
    }
  }

  // Show upload loader when uploading
  if (isUploading) {
    return (
      <Card className="bg-gradient-to-br from-pink-900/40 to-purple-900/40 border-2 border-pink-400/50 backdrop-blur-sm shadow-lg shadow-pink-500/25">
        <CardContent className="p-8">
          <UploadLoader progress={uploadProgress} fileName={currentFileName} stage={uploadStage} />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gradient-to-br from-pink-900/40 to-purple-900/40 border-2 border-pink-400/50 backdrop-blur-sm shadow-lg shadow-pink-500/25">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 border-2 border-pink-400 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-pink-500/25">
            <Upload className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-pink-300 mb-2 font-mono uppercase tracking-wider">Upload Files</h3>
          <p className="text-white text-sm font-mono mb-6">
            Drag & drop or select files to upload to the decentralized network
          </p>
        </div>

        {/* Upload Area */}
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
            dragActive ? "border-pink-400 bg-pink-500/20" : "border-pink-400/50 bg-pink-500/5 hover:border-pink-400"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="w-12 h-12 text-pink-400 mx-auto mb-4" />
          <p className="text-white font-mono text-sm mb-2">
            {dragActive ? "Drop files here" : "Drop files here or click to browse"}
          </p>
          <p className="text-pink-300 font-mono text-xs">Max file size: 100MB</p>
          <input ref={fileInputRef} type="file" multiple className="hidden" accept="*/*" onChange={handleFileSelect} />
        </div>

        {/* Selected Files */}
        {selectedFiles.length > 0 && (
          <div className="mt-6">
            <h4 className="text-pink-300 font-mono text-sm mb-3 uppercase tracking-wider">
              Selected Files ({selectedFiles.length})
            </h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {selectedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 bg-pink-500/10 border border-pink-400/30 rounded"
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-white font-mono text-xs truncate max-w-48">{file.name}</span>
                    <span className="text-pink-300 font-mono text-xs">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation()
                      removeFile(index)
                    }}
                    className="h-6 w-6 p-0 text-red-400 hover:text-red-300"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        <Button
          onClick={handleUpload}
          disabled={selectedFiles.length === 0}
          className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-2 border-pink-400 font-mono uppercase tracking-wider disabled:opacity-50"
        >
          <Upload className="w-4 h-4 mr-2" />
          {`Upload ${selectedFiles.length > 0 ? `(${selectedFiles.length})` : ""} to Network`}
        </Button>
      </CardContent>
    </Card>
  )
}
