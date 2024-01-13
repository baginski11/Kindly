import BookSlider from "@/components/bookSlider";
import DragAndDrop from "@/components/dragAndDrop";
import { ModeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div>
<h1 className='text-3xl font-bold text-center mt-6'><span className=' bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse'>Kindly.</span></h1>
{/* <h1 className="text-sm text-destructive font-medium text-center mt-3">No connected devices found.</h1> */}
<h1 className="text-sm text-green-400 font-medium text-center mt-3">Kindle Paperwhite connected</h1>
    <div className="flex items-center justify-center pt-5">
    <BookSlider/>
    </div>
    

      {/* <DragAndDrop></DragAndDrop> */}
    </div>
  )
}
