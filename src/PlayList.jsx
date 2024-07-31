import { Song } from "./Song"

export const PlayList = ({ items, onDelete, onMoveDown }) => {

    return <div>
        <h1>PlayList</h1>
        {
            items.map(elm => (
                <Song
                    key={elm.id}
                    {...elm}
                    inPlaylist={true}
                    onDelete={onDelete}
                    onMoveDown={onMoveDown}
                />
        ))}
    </div>
}
