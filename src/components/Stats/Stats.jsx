const Stats = ({ user, allPosts, userProfile }) => {
  const userPosts = allPosts?.filter(
    (post) => post.author._id === user.profile
  );

  let postCount = 0;
  let emotions = [];
  let downCount = 0;
  let fearfulCount = 0;
  let angryCount = 0;
  let disgustedCount = 0;
  let sadCount = 0;
  let happyCount = 0;
  let surprisedCount = 0;
  let downPercentage;
  let fearfulPercentage;
  let angryPercentage;
  let disgustedPercentage;
  let sadPercentage;
  let happyPercentage;
  let surprisedPercentage;

  userPosts?.forEach((post) => {
    postCount++;
    emotions.push(post.emotion);
  });

  let emotionCount = emotions.reduce(function (prev, emotion) {
    if (prev[emotion]) {
      prev[emotion] = prev[emotion] + 1;
    } else {
      prev[emotion] = 1;
    }
    return prev;
  }, {});

  if (emotionCount.Stressed) {
    downCount += emotionCount.Stressed;
  }
  if (emotionCount.Bored) {
    downCount += emotionCount.Bored;
  }
  if (emotionCount.Tired) {
    downCount += emotionCount.Tired;
  }

  if (emotionCount.Anxious) {
    fearfulCount += emotionCount.Anxious;
  }
  if (emotionCount.Rejected) {
    fearfulCount += emotionCount.Rejected;
  }
  if (emotionCount.Scared) {
    fearfulCount += emotionCount.Scared;
  }

  if (emotionCount.Mad) {
    angryCount += emotionCount.Mad;
  }
  if (emotionCount.Jealous) {
    angryCount += emotionCount.Jealous;
  }
  if (emotionCount.Betrayed) {
    angryCount += emotionCount.Betrayed;
  }

  if (emotionCount.Embarrassed) {
    disgustedCount += emotionCount.Embarrassed;
  }
  if (emotionCount.Disgusted) {
    disgustedCount += emotionCount.Disgusted;
  }

  if (emotionCount.Lonely) {
    sadCount += emotionCount.Lonely;
  }
  if (emotionCount.Guilty) {
    sadCount += emotionCount.Guilty;
  }
  if (emotionCount.Hurt) {
    sadCount += emotionCount.Hurt;
  }

  if (emotionCount.Optimistic) {
    happyCount += emotionCount.Optimistic;
  }
  if (emotionCount.Peaceful) {
    happyCount += emotionCount.Peaceful;
  }
  if (emotionCount.Powerful) {
    happyCount += emotionCount.Powerful;
  }
  if (emotionCount.Accepted) {
    happyCount += emotionCount.Accepted;
  }
  if (emotionCount.Joyful) {
    happyCount += emotionCount.Joyful;
  }
  if (emotionCount.Startled) {
    surprisedCount += emotionCount.Startled;
  }
  if (emotionCount.Confused) {
    surprisedCount += emotionCount.Confused;
  }
  if (emotionCount.Excited) {
    surprisedCount += emotionCount.Excited;
  }
  if (emotionCount.Amazed) {
    surprisedCount += emotionCount.Amazed;
  }

  function findPercent(emotionNum) {
    return ((emotionNum / postCount) * 100).toFixed(2);
  }

  downPercentage = findPercent(downCount);
  fearfulPercentage = findPercent(fearfulCount);
  angryPercentage = findPercent(angryCount);
  disgustedPercentage = findPercent(disgustedCount);
  sadPercentage = findPercent(sadCount);
  happyPercentage = findPercent(happyCount);
  surprisedPercentage = findPercent(surprisedCount);

  const emotionPercentagesArr = [
    downPercentage,
    fearfulPercentage,
    angryPercentage,
    disgustedPercentage,
    sadPercentage,
    happyPercentage,
    surprisedPercentage,
  ];

  const emotionPercentagesObj = {
    Down: downPercentage,
    Fearful: fearfulPercentage,
    Angry: angryPercentage,
    Disgusted: disgustedPercentage,
    Sad: sadPercentage,
    Happy: happyPercentage,
    Surprised: surprisedPercentage,
  };

  const emotionsWithPercentages = [
    { emotion: "Down", percent: downPercentage },
    { emotion: "Fearful", percent: fearfulPercentage },
    { emotion: "Angry", percent: angryPercentage },
    { emotion: "Disgusted", percent: disgustedPercentage },
    { emotion: "Sad", percent: sadPercentage },
    { emotion: "Happy", percent: happyPercentage },
    { emotion: "Surprised", percent: surprisedPercentage },
  ];

  // console.log(emotionsWithPercentages.sort((a, b) => {
  //   if (a.percent >= b.percent) {
  //     return -1
  //   }
  // }))

  let sortedEmotions = emotionsWithPercentages.sort((a, b) => {
    if (a.percent >= b.percent) {
      return -1;
    }
  });

  console.log("SORTED EMOTIONS:", sortedEmotions);

  const findTopThree = () => {
    return (
      <>
        <p>
          {sortedEmotions[0].percent}% {sortedEmotions[0].emotion}
        </p>
        <p>
          {sortedEmotions[1].percent}% {sortedEmotions[1].emotion}
        </p>
        <p>
          {sortedEmotions[2].percent}% {sortedEmotions[2].emotion}
        </p>
      </>
    );
  };

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
        <h5>Top Three:</h5>
        {findTopThree()}
      </div>
    </>
  );
};

export default Stats;
