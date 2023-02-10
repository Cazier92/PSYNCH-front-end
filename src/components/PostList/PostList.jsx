
import './PostList.css'
import PostCard from '../Posts/PostCard'



const PostList = ({posts, user, handleDecideAction}) => {
  return (
    <>
      <main className='layout'>
        <div className='main-feed'>
          {posts.length !== 0 ?
            posts.map((post) => {
              return <PostCard 
                post={post}
                key={post._id}
                user={user}
                handleDecideAction={handleDecideAction}
              />
            })
            :   
            <p>Loading...</p> 
          } 
        </div>
      </main>
    </>
  )
}



export default PostList
