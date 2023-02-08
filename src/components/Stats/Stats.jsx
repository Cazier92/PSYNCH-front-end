


const Stats = ({ user, allPosts }) => {

  const userPosts = allPosts.filter(post => post.author._id === user.profile)
  // console.log(userPosts)
  let postCount = 0
  let emotions = []
  let downCount = 0
  let fearfulCount = 0
  let angryCount = 0
  let disgustedCount = 0
  let sadCount = 0
  let happyCount = 0
  let surprisedCount = 0

  userPosts.map((post) => {
    // console.log(post.emotion)
    postCount ++
    emotions.push(post.emotion)
  })
  // console.log(postCount)
  // console.log('EMOTIONS', emotions)
  let emotionCount = emotions.reduce(function(prev, emotion) {
    if(prev[emotion]) {
      prev[emotion] = prev[emotion] +1
    } else {
      prev[emotion] = 1
    }
    return prev
  }, {})

  console.log('EMOTIONCOUNT:', emotionCount)
  if (emotionCount.Stressed) {
    downCount += emotionCount.Stressed
  }
  if (emotionCount.Bored) {
    downCount += emotionCount.Bored
  }
  if (emotionCount.Tired) {
    downCount += emotionCount.Tired
  }
  console.log('DOWNCOUNT:', downCount)

  if (emotionCount.Anxious) {
    fearfulCount += emotionCount.Anxious
  }
  if (emotionCount.Rejected) {
    fearfulCount += emotionCount.Rejected
  }
  if (emotionCount.Scared) {
    fearfulCount += emotionCount.Scared
  }
  console.log('FEARFULCOUNT:', fearfulCount)

  
  if (emotionCount.Mad) {
    angryCount += emotionCount.Mad
  }
  if (emotionCount.Jealous) {
    angryCount += emotionCount.Jealous
  }
  if (emotionCount.Betrayed) {
    angryCount += emotionCount.Betrayed
  }
  console.log('ANGRYCOUNT:', angryCount)

  if (emotionCount.Embarrassed) {
    disgustedCount += emotionCount.Embarrassed
  }
  if (emotionCount.Disgusted) {
    disgustedCount += emotionCount.Disgusted
  }

  console.log('DISGUSTEDCOUNT:', disgustedCount)

  if (emotionCount.Lonely) {
    sadCount += emotionCount.Lonely
  }
  if (emotionCount.Guilty) {
    sadCount += emotionCount.Guilty
  }
  if (emotionCount.Hurth) {
    sadCount += emotionCount.Hurth
  }
  console.log('SADCOUNT:', sadCount)

  if (emotionCount.Optimistic) {
    happyCount += emotionCount.Optimistic
  }
  if (emotionCount.Peaceful) {
    happyCount += emotionCount.Peaceful
  }
  if (emotionCount.Powerful) {
    happyCount += emotionCount.Powerful
  }
  if (emotionCount.Accepted) {
    happyCount += emotionCount.Accepted
  }
  if (emotionCount.Joyful) {
    happyCount += emotionCount.Joyful
  }
  console.log('HAPPYCOUNT:', happyCount)

  if (emotionCount.Startled) {
    surprisedCount += emotionCount.Startled
  }
  if (emotionCount.Confused) {
    surprisedCount += emotionCount.Confused
  }
  if (emotionCount.Excited) {
    surprisedCount += emotionCount.Excited
  }
  if (emotionCount.Amazed) {
    surprisedCount += emotionCount.Amazed
  }
  console.log('SURPRISEDCOUNT:', surprisedCount)


  
  return ( 
    <>
    <h1>Stats:</h1>
    <h5>Down Posts: {downCount}</h5>
    <h5>Fearful Posts: {fearfulCount}</h5>
    <h5>Angry Posts: {angryCount}</h5>
    <h5>Disgusted Posts: {disgustedCount}</h5>
    <h5>Sad Posts: {sadCount}</h5>
    <h5>Happy Posts:{happyCount}</h5>
    <h5>Surprised Posts: {surprisedCount}</h5>
    </>
  );
}

export default Stats;