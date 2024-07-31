export const Song = ({ title, id, duration, artist, onDelete, onAdd, inPlaylist, onMoveDown }) => {

    return <div className=" song">
        {
            inPlaylist && <button onClick={() => onMoveDown(id)}> Move Down</button>

        }
        <p>{title} {id} {duration} {artist}</p>
        <button onClick={() => onDelete(id)}>Delete</button>
        {
            !inPlaylist && <button onClick={() => onAdd({ id, title, duration, artist })}>Move</button>

        }

    </div>
}