import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from './Stats.module.css'

const Stats = ({ user, allPosts, userProfile }) => {
  const [userPosts, setUserPosts] = useState([])

  const currentStatus = userProfile.currentStatus


  useEffect(() => {
    setUserPosts(allPosts?.filter(
      (post) => post.author._id === user.profile
    ))
    
  }, [allPosts, user])

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


  const emotionsWithPercentages = [
    { emotion: "Down", percent: downPercentage },
    { emotion: "Fearful", percent: fearfulPercentage },
    { emotion: "Angry", percent: angryPercentage },
    { emotion: "Disgusted", percent: disgustedPercentage },
    { emotion: "Sad", percent: sadPercentage },
    { emotion: "Happy", percent: happyPercentage },
    { emotion: "Surprised", percent: surprisedPercentage },
  ];



  let sortedEmotions = emotionsWithPercentages.sort((a, b) => {
    if (a.percent >= b.percent) {
      return -1;
    }
  });


  const findTopThree = () => {
    return (
      <>
        <p className={styles.topOne}> 
          {sortedEmotions[0].emotion}<br></br>{sortedEmotions[0].percent}% 
        </p>
        <p className={styles.topTwo}>
          {sortedEmotions[1].emotion}<br></br> {sortedEmotions[1].percent}% 
        </p>
        <p className={styles.topThree}>
          {sortedEmotions[2].emotion}<br></br> {sortedEmotions[2].percent}% 
        </p>
      </>
    );
  };

  return (
    <>
    <div className={styles.statsMain}>
      <div className={styles.statsTitle} >
        
      <p >Stats</p>
      </div>
      
      
        <div className={styles.currentStatus}>
            <div className={styles.statusSquare}>
            <p> <strong>Current Status: </strong></p><br></br>
            <p>{currentStatus}</p>
            <Link to="/posts/new">
              <button className={styles.updateBtn}>Update</button>
            </Link>
          </div>
        
      </div>
      <div className={styles.topThreeStats}>
        <p className={styles.topThreeTitle}>Top Three</p>
        <Link to={`/profile/${user.profile}`}>
          <p className={styles.totalPosts}>Total Posts: {postCount}</p>
        
        </Link>

        <div className={styles.topThreeContainer}>{findTopThree()}</div>
          
      </div>
      <div className={styles.allStats}>

         

        <div className={styles.statsList}>
       
        <p className={styles.breakdownTitle}>Breakdown</p>

          <p>Down Posts: {downCount}</p>
          <p>Fearful Posts: {fearfulCount}</p>
          <p>Angry Posts: {angryCount}</p>
          <p>Sad Posts: {sadCount}</p>
          <p>Happy Posts:{happyCount}</p>
          <p>Surprised Posts: {surprisedCount}</p>
        </div>
       
      </div>
    </div>
    </>
  );
};

export default Stats;
