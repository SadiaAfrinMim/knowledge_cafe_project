import Bookmark from "./bookmark";


const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        
        <div className="md:w-1/3 rounded-xl py-5 p-3 bg-gray-300 ml-4 mt-2">
            <div className="border-2 p-5 rounded-xl text-center border-purple-600 bg-purple-300">
                <h3 className="text-4xl">Reading Time :{readingTime}</h3>
            </div>
            <h2 className="text-center py-4 text-3xl">Bookmarks Blog: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;