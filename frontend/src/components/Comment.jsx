import { BiEdit } from "react-icons/bi"
import { MdDelete } from "react-icons/md"


const Comment = () => {
  return (
    <div className="px-2 py-2 bg-gray-300 rounded-2xl my-3"> 
            <div className="flex items-center justify-between"> 
              <h3 className="font-bold text-gray-600">@libanadr</h3>
              <div className="flex justify-center items-center space-x-4">
                <p className="text-gray-500 text-sm">16/06/2023</p>
                <p className="text-gray-500 text-sm">16:45</p>
                <div className="flex items-center justify-end space-x-2"> 
                 <p className="mr-2"><BiEdit /></p> 
                 <p><MdDelete /></p>
                </div>
              </div>
            </div>
            <p className="px-4 mt-2">Nice Informatiom!!</p>
          </div>
  )
}

export default Comment
