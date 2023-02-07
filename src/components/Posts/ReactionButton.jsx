


const ReactionButton = ({setShowReactions, showReactions, reactionType}) => {
  if (reactionType === null) {
    return ( 
      <>
        <i id="reaction-btn" className='fa-regular fa-heart'
          onClick={() => (setShowReactions(!showReactions))}></i>
      </>
    );

  }
  if (reactionType === 'Love') {
    return ( 
      <>
        <i id="reaction-btn" className='fa-solid fa-heart'
          onClick={() => (setShowReactions(!showReactions))}></i>
      </>
    );

  }
  if (reactionType === 'Like') {
    return (
      <i id="reaction-btn" className='fa-solid fa-thumbs-up'
        onClick={() => (setShowReactions(!showReactions))}></i>

    )
  }
  if (reactionType === 'Celebrate') {
    return (
      <i id="reaction-btn" className='fa-solid fa-champagne-glasses'
        onClick={() => (setShowReactions(!showReactions))}></i>

    )
  }
  if (reactionType === 'Support') {
    return (
      <i id="reaction-btn" className='fa-solid fa-hand-holding-medical'
        onClick={() => (setShowReactions(!showReactions))}></i>

    )
  }
  if (reactionType === 'Funny') {
    return (
      <i id="reaction-btn" className='fa-solid fa-face-grin-tears'
        onClick={() => (setShowReactions(!showReactions))}></i>

    )
  }
  if (reactionType === 'Curious') {
    return (
      <i id="reaction-btn" className='fa-solid fa-lightbulb'
        onClick={() => (setShowReactions(!showReactions))}></i>

    )
  }
}

export default ReactionButton;