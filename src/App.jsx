import { SongList } from './Songlist'
import { useState } from 'react'
import { PlayList } from './PlayList'
import './App.css'

function App() {
  const [songs, setSongs] = useState([
    { id: 101, title: 'Symphone No.40', artist: 'Mozart', duration: 20 },
    { id: 102, title: 'A1', artist: 'B1', duration: 15 },
    { id: 103, title: 'A2', artist: 'B2', duration: 15 },
    { id: 104, title: 'A3', artist: 'B3', duration: 12 }
  ])

  const [playlist, setPlaylist] = useState([])

  const removeSong = id => {
    setSongs(songs.filter(x => x.id != id))
    setPlaylist(playlist.filter(x => x.id != id))
  }

  const removeFromPlaylist = id => {
    setPlaylist(playlist.filter(x => x.id != id))
  }

  const addSong = song => {
    if (!playlist.find(x => x.id == song.id)) {
      setPlaylist([...playlist, song])
    }
  }

  const moveSongDown = id => {
    const index = playlist.findIndex(song => song.id === id)
    if (index < 0 || index === playlist.length - 1) return

    const updatedPlaylist = [...playlist]
      ;[updatedPlaylist[index], updatedPlaylist[index + 1]] = [updatedPlaylist[index + 1], updatedPlaylist[index]]
    setPlaylist(updatedPlaylist)

  }

  return <>
    <SongList
      items={songs}
      onDelete={removeSong}
      onAdd={addSong}
    />
    <PlayList
      items={playlist}
      onDelete={removeFromPlaylist}
      onMoveDown={moveSongDown}

    />
  </>
}

export default App
