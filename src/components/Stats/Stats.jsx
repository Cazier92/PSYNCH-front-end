


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
  let downPercentage
  let fearfulPercentage 
  let angryPercentage
  let disgustedPercentage
  let sadPercentage
  let happyPercentage
  let surprisedPercentage



  userPosts.map((post) => {
    postCount ++
    emotions.push(post.emotion)
  })

  let emotionCount = emotions.reduce(function(prev, emotion) {
    if(prev[emotion]) {
      prev[emotion] = prev[emotion] +1
    } else {
      prev[emotion] = 1
    }
    return prev
  }, {})

  // console.log('EMOTIONCOUNT:', emotionCount)
  if (emotionCount.Stressed) {
    downCount += emotionCount.Stressed
  }
  if (emotionCount.Bored) {
    downCount += emotionCount.Bored
  }
  if (emotionCount.Tired) {
    downCount += emotionCount.Tired
  }

  if (emotionCount.Anxious) {
    fearfulCount += emotionCount.Anxious
  }
  if (emotionCount.Rejected) {
    fearfulCount += emotionCount.Rejected
  }
  if (emotionCount.Scared) {
    fearfulCount += emotionCount.Scared
  }
  
  if (emotionCount.Mad) {
    angryCount += emotionCount.Mad
  }
  if (emotionCount.Jealous) {
    angryCount += emotionCount.Jealous
  }
  if (emotionCount.Betrayed) {
    angryCount += emotionCount.Betrayed
  }

  if (emotionCount.Embarrassed) {
    disgustedCount += emotionCount.Embarrassed
  }
  if (emotionCount.Disgusted) {
    disgustedCount += emotionCount.Disgusted
  }



  if (emotionCount.Lonely) {
    sadCount += emotionCount.Lonely
  }
  if (emotionCount.Guilty) {
    sadCount += emotionCount.Guilty
  }
  if (emotionCount.Hurt) {
    sadCount += emotionCount.Hurt
  }


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


  function findPercent(emotionNum) {
    return ((emotionNum/postCount) * 100).toFixed(2)
  }

  downPercentage = findPercent(downCount)
  fearfulPercentage = findPercent(fearfulCount)
  angryPercentage = findPercent(angryCount)
  disgustedPercentage = findPercent(disgustedCount)
  sadPercentage = findPercent(sadCount)
  happyPercentage = findPercent(happyCount)
  surprisedPercentage = findPercent(surprisedCount)

  const emotionPercentagesArr = [downPercentage, fearfulPercentage, angryPercentage, disgustedPercentage, sadPercentage, happyPercentage, surprisedPercentage]

  // const topThree = []

  // emotionPercentagesArr.sort((a, b) => {
  //   if (a >= b) {
  //     return -1
  //   }
  // })

  const emotionPercentagesObj = {
    Down: downPercentage,
    Fearful: fearfulPercentage,
    Angry: angryPercentage,
    Disgusted: disgustedPercentage,
    Sad: sadPercentage,
    Happy: happyPercentage,
    Surprised: surprisedPercentage,
  }

  // console.log('SORTPERCENTAGES:', emotionPercentagesArr.sort((a, b) => {
  //   if (a >= b) {
  //     return -1
  //   }
  // }).pop([3, 4, 5, 6, 7]))

  // console.log(Object.keys(emotionPercentagesObj).sort((a, b) => {
  //   if (a >= b) {
  //     return -1
  //   }
  // }))
  // console.log(Object.values(emotionPercentagesObj).sort((a, b) => {
  //   if (a >= b) {
  //     return -1
  //   }
  // }))

  // console.log()
  
  
  const topThreeKey = Object.keys(emotionPercentagesObj).sort((a, b) => {
    if (a > b) {
      return -1
    }
  }).slice(0, 3)
  
  const topThreeValue = Object.values(emotionPercentagesObj).sort((a, b) => {
    if (a >= b) {
      return -1
    }
  }).slice(0, 3)
  
  
  console.log(sadPercentage)

  const topThree = () => {
    return (
      <>
        <p>{topThreeValue[0]}% {topThreeKey[2]}</p>
        <p>{topThreeValue[1]}% {topThreeKey[1]}</p>
        <p>{topThreeValue[2]}% {topThreeKey[0]}</p>
      
      </>
    )
  }









  
  return ( 
    <>
    <h1>Stats:</h1>
    <div>
      <h5>Down Posts: {downCount}</h5>
      <h5>Fearful Posts: {fearfulCount}</h5>
      <h5>Angry Posts: {angryCount}</h5>
      <h5>Disgusted Posts: {disgustedCount}</h5>
      <h5>Sad Posts: {sadCount}</h5>
      <h5>Happy Posts:{happyCount}</h5>
      <h5>Surprised Posts: {surprisedCount}</h5>
    </div>
    <div>
      <h2>Breakdown:</h2>
      {/* <h3>Out of {postCount} posts:</h3>
      <p>{downPercentage}% you have been feeling down</p>
      <p>{fearfulPercentage}% you have been feeling fearful</p>
      <p>{angryPercentage}% you have been feeling angry</p>
      <p>{disgustedPercentage}% you have been feeling disgusted</p>
      <p>{sadPercentage}% you have been feeling sad</p>
      <p>{happyPercentage}% you have been feeling happy</p>
      <p>{surprisedPercentage}% you have been feeling surprised</p> */}
      <h5>Top Three:</h5>
      {topThree()}
    </div>
    </>
  );
}

export default Stats;