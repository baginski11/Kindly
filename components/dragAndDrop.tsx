import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function DragAndDrop() {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-6">
      <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg">
        <UploadIcon className="w-12 h-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Drag and drop some files here, or click to select files
        </p>
        <Input className="sr-only" id="file-upload" type="file" />
        <Label className="mt-2" htmlFor="file-upload">
          <Button variant="outline">Select a file</Button>
        </Label>
      </div>
    
    </div>
  )
}


function UploadIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}