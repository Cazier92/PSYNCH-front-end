


const Friend = ({friend}) => {
  return ( 
    <>
    <h1>{friend.name}</h1>
    <p>is feeling {friend.currentStatus} today</p>
    </>
   );
}
 
export default Friend;