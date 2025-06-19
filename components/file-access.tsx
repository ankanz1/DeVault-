"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Database, Download, Trash2, Search, Eye } from "lucide-react"
import { useFileStorage } from "@/hooks/use-file-storage"
import { toast } from "sonner"

export function FileAccess() {
  const { files, downloadFile, deleteFile, formatFileSize, getFileTypeIcon } = useFileStorage()
  const [searchTerm, setSearchTerm] = useState("")

  const filteredFiles = files.filter((file) => file.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleDownload = (fileId: string, fileName: string) => {
    downloadFile(fileId)
    toast.success(`${fileName} downloaded successfully!`)
  }

  const handleDelete = (fileId: string, fileName: string) => {
    if (confirm(`Are you sure you want to delete ${fileName}?`)) {
      deleteFile(fileId)
      toast.success(`${fileName} deleted successfully!`)
    }
  }

  const handlePreview = (file: any) => {
    if (file.type.startsWith("image/")) {
      const newWindow = window.open()
      if (newWindow) {
        newWindow.document.write(`
          <html>
            <head><title>${file.name}</title></head>
            <body style="margin:0;padding:20px;background:#000;display:flex;justify-content:center;align-items:center;min-height:100vh;">
              <img src="${file.data}" style="max-width:100%;max-height:100%;object-fit:contain;" alt="${file.name}">
            </body>
          </html>
        `)
      }
    } else if (file.type.startsWith("text/") || file.type.includes("json")) {
      // For text files, we'd need to decode the base64 data
      toast.info("Text preview coming soon!")
    } else {
      toast.info("Preview not available for this file type")
    }
  }

  return (
    <Card className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border-2 border-cyan-400/50 backdrop-blur-sm shadow-lg shadow-cyan-500/25">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 border-2 border-cyan-400 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/25">
            <Database className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-cyan-300 mb-2 font-mono uppercase tracking-wider">My Files</h3>
          <p className="text-white text-sm font-mono mb-6">Access and manage your uploaded files from anywhere</p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-4 h-4" />
          <Input
            placeholder="Search files..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-cyan-500/10 border-cyan-400/30 text-white placeholder-cyan-300/50 font-mono text-sm"
          />
        </div>

        {/* File List */}
        <div className="space-y-3 mb-6 max-h-80 overflow-y-auto">
          {filteredFiles.length === 0 ? (
            <div className="text-center py-8">
              <Database className="w-12 h-12 text-cyan-400/50 mx-auto mb-4" />
              <p className="text-cyan-300 font-mono text-sm">
                {files.length === 0 ? "No files uploaded yet" : "No files match your search"}
              </p>
            </div>
          ) : (
            filteredFiles.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between p-3 bg-cyan-500/10 border border-cyan-400/30 rounded-lg hover:bg-cyan-500/20 transition-colors"
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-300 text-xs font-mono font-bold">{getFileTypeIcon(file.type)}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-mono text-sm truncate">{file.name}</p>
                    <p className="text-cyan-300 font-mono text-xs">
                      {formatFileSize(file.size)} • {file.uploadDate.toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  {file.type.startsWith("image/") && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handlePreview(file)}
                      className="h-8 w-8 p-0 text-cyan-300 hover:text-cyan-200 hover:bg-cyan-400/10"
                      title="Preview"
                    >
                      <Eye className="w-3 h-3" />
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDownload(file.id, file.name)}
                    className="h-8 w-8 p-0 text-cyan-300 hover:text-cyan-200 hover:bg-cyan-400/10"
                    title="Download"
                  >
                    <Download className="w-3 h-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDelete(file.id, file.name)}
                    className="h-8 w-8 p-0 text-red-400 hover:text-red-300 hover:bg-red-400/10"
                    title="Delete"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-2 border-cyan-400 font-mono uppercase tracking-wider">
          <Database className="w-4 h-4 mr-2" />
          Manage All Files ({files.length})
        </Button>
      </CardContent>
    </Card>
  )
}
