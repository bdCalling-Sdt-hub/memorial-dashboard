import photo from "../../assets/Rectangle.png";
import { Pagination } from 'antd';
const UserStory = () => {
    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
          return <a>Previous</a>;
        }
        if (type === 'next') {
          return <a>Next</a>;
        }
        return originalElement;
    };
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 my-6">
        {
          [...Array(10)].map((index)=>(
            <div key={index} className="flex items-center gap-6 w-full bg-white rounded-lg p-2">
                <img src={photo} width={100} height={100} alt="" />
                <div>
                  <h3 className="text-[18px] font-medium">We helped our father write his last story</h3>
                  <h4 className="text-[14px] font-normal">5:25 pm</h4>
                  <h4 className="text-[14px] font-normal">24 Dec, 2023</h4>
                </div>
            </div>
          ))
        }
      </div>
      <div className="flex items-center justify-center">
        <Pagination total={500} itemRender={itemRender} /> 
      </div>
        </div>
    )
}

export default UserStory