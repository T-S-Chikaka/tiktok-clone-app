import React, { useState, useEffect } from 'react';
import Video from './components/Video'
import './App.css';
import db from './firebase';

function App() {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    // fire once onComponentLoad and when dependencies change
    db.collection('videos').onSnapshot(snapshot => (
      setVideos(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])

  return (
    //BEM convention8
    <div className="app">    
        <div className="app__videos">
        {
          videos.map(
            ({
              url,
              channel,
              description,
              song,
              likes,
              messages,
              shares
            }) => (
              <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
              />
            )
          )
        }
        </div>
    </div>
  )
}

export default App;
