import { CircleQuestionMark, FileTextIcon } from "lucide-react"

const NotFound = () => {
  return (
    <div className="items-center justify-center flex flex-col h-screen"> 
        <CircleQuestionMark width={45} height={45} />
        <h1 className="text-4xl font-bold text-red-500">Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
    </div>
  )
}

export default NotFound