import Comments from "./comments/Comments";
import Navbar from "./comments/Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
      
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default App;
