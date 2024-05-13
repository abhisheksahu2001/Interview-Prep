import React, { useState } from 'react'

const Folder = ({ insertInTree, Explorer, }) => {
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: false,
    })
    const AddFileORFolder = (e, isFolder) => {
        e.stopPropagation()
        setShowInput({
            visible: true,
            isFolder,
        })
    }

    const onAdd = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            insertInTree(Explorer.id, e.target.value, showInput.isFolder);
            setShowInput({ ...showInput, visible: false })
        }
    }
    return (
        <section style={Explorer.id == 1 ? { marginTop: "10px", paddingTop: "10px" } : null} className='__File_Explorer_Tree' >
            <nav className={`__File_Explorer_Nav  `} data-foldername={Explorer.name} onClick={() => setExpand(!expand)} >
                <p className={`  __File_Explorer_Folder_title  `} data-foldername={Explorer.name} onClick={(e) => selectFolder(e)} >
                    {Explorer.isFolder ? Explorer.Files.length > 0 ? '🗂️' : '📁' : '📄'}{Explorer.name}
                </p>
                {Explorer.isFolder ? (
                    <span className='__File_Explorer_Btn_box' >
                        <button onClick={(e) => AddFileORFolder(e, true)} className='__File_Explorer_btn' type='button'>Folder + </button>
                        <button onClick={(e) => AddFileORFolder(e, false)} className='__File_Explorer_btn' type='button'>File + </button>
                    </span>

                ) : null}
            </nav>
            {showInput.visible && (
                <span className='__File_Input_Container' >
                    <span>{showInput.isFolder ? '📁' : '📄'}</span>
                    <input onKeyDown={onAdd} className='__File_Input_Box' onBlur={() => setShowInput({ ...showInput, visible: false })} name="folder" autoFocus />
                </span>
            )}
            <div style={{ display: expand ? 'block' : 'none' }} >
                {Explorer.Files.map((file) => (
                    <Folder key={file.id} Explorer={file} insertInTree={insertInTree} />
                ))}
            </div>
        </section>
    )
}

export default Folder

// {
//     Explorer && Explorer.map((folder, idx) => (
//         <div key={`${folder.name} + ${idx}`} className={`__File_Explorer_Folder_Box`} >
//             <nav className={`__File_Explorer_Nav `} data-foldername={folder.name}  >
//                 <p className={`  __File_Explorer_Folder_title  `} >
//                     {folder.name}
//                 </p>
//                 {folder.isFolder ? (
//                     <span className='__File_Explorer_Btn_box' >
//                         <button className='__File_Explorer_btn' type='button'>Folder + </button>
//                         <button className='__File_Explorer_btn' type='button'>File + </button>
//                     </span>
//                 ) : null}
//             </nav>
//             {(folder.Files.map((file) => (
//                 <span data-filename={file.fileName} key={file.fileId} className={` __File_Explorer_File_Box }  `}  >
//                     {file.fileName}.{file.fileExtension}
//                 </span>

//             )))
//             }
//         </div>

//     ))
// }