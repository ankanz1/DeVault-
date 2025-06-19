"use client"

import { useState, useEffect } from "react"

export interface StoredFile {
  id: string
  name: string
  size: number
  type: string
  uploadDate: Date
  data: string // base64 encoded file data
}

export function useFileStorage() {
  const [files, setFiles] = useState<StoredFile[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadStage, setUploadStage] = useState<"uploading" | "encrypting" | "distributing" | "complete">("uploading")
  const [currentFileName, setCurrentFileName] = useState<string>("")

  // Load files from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("devault-files")
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setFiles(parsed.map((f: any) => ({ ...f, uploadDate: new Date(f.uploadDate) })))
      } catch (error) {
        console.error("Failed to load stored files:", error)
      }
    }
  }, [])

  // Save files to localStorage whenever files change
  useEffect(() => {
    localStorage.setItem("devault-files", JSON.stringify(files))
  }, [files])

  const uploadFile = async (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (file.size > 100 * 1024 * 1024) {
        reject(new Error("File size exceeds 100MB limit"))
        return
      }

      setIsUploading(true)
      setUploadProgress(0)
      setUploadStage("uploading")
      setCurrentFileName(file.name)

      const reader = new FileReader()

      reader.onload = () => {
        const newFile: StoredFile = {
          id: crypto.randomUUID(),
          name: file.name,
          size: file.size,
          type: file.type,
          uploadDate: new Date(),
          data: reader.result as string,
        }

        // Simulate multi-stage upload process
        const stages = [
          { stage: "uploading" as const, duration: 1000, endProgress: 30 },
          { stage: "encrypting" as const, duration: 800, endProgress: 60 },
          { stage: "distributing" as const, duration: 1200, endProgress: 90 },
          { stage: "complete" as const, duration: 500, endProgress: 100 },
        ]

        let currentStageIndex = 0
        let currentProgress = 0

        const processStage = () => {
          if (currentStageIndex >= stages.length) {
            setFiles((prev) => [newFile, ...prev])
            setIsUploading(false)
            setTimeout(() => {
              setUploadProgress(0)
              setCurrentFileName("")
            }, 2000)
            resolve()
            return
          }

          const stage = stages[currentStageIndex]
          setUploadStage(stage.stage)

          const startProgress = currentProgress
          const progressDiff = stage.endProgress - startProgress
          const stepCount = 20
          const stepSize = progressDiff / stepCount
          const stepDuration = stage.duration / stepCount

          let step = 0
          const progressInterval = setInterval(() => {
            step++
            currentProgress = startProgress + stepSize * step
            setUploadProgress(Math.min(currentProgress, stage.endProgress))

            if (step >= stepCount) {
              clearInterval(progressInterval)
              currentStageIndex++
              setTimeout(processStage, 200)
            }
          }, stepDuration)
        }

        processStage()
      }

      reader.onerror = () => {
        setIsUploading(false)
        setUploadProgress(0)
        setCurrentFileName("")
        reject(new Error("Failed to read file"))
      }

      reader.readAsDataURL(file)
    })
  }

  const downloadFile = (fileId: string) => {
    const file = files.find((f) => f.id === fileId)
    if (!file) return

    const link = document.createElement("a")
    link.href = file.data
    link.download = file.name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const deleteFile = (fileId: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== fileId))
  }

  const getTotalSize = () => {
    return files.reduce((total, file) => total + file.size, 0)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const getFileTypeIcon = (type: string) => {
    if (type.startsWith("image/")) return "IMG"
    if (type.startsWith("video/")) return "VID"
    if (type.startsWith("audio/")) return "AUD"
    if (type.includes("pdf")) return "PDF"
    if (type.includes("zip") || type.includes("rar")) return "ZIP"
    if (type.includes("text")) return "TXT"
    if (type.includes("json")) return "JSON"
    return "FILE"
  }

  return {
    files,
    isUploading,
    uploadProgress,
    uploadStage,
    currentFileName,
    uploadFile,
    downloadFile,
    deleteFile,
    getTotalSize,
    formatFileSize,
    getFileTypeIcon,
  }
}
