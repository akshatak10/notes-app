import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
    return <div className="note">
        <span>hello this is a note</span>
        <div className='note-footer'>
            <small>19/06/2002</small>
            <MdDeleteForever className='delete-icons' size='1.3em'/>
        </div>
    </div>;
}
 export default Note;