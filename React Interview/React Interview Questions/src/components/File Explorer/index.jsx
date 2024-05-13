import React, { useState } from 'react'
import './index.css'
import data from './data.json'
import Folder from './Folder'
import useFileTree from './hooks/useFileTree'
const FileExplorer = () => {
    const [explorerData, setExplorerData] = useState(data.Folders);
    const { insertNode } = useFileTree();

    const insertFileORFolderInTree = (folderId, item, isFolder) => {
        const finalTree = insertNode(explorerData, folderId, item, isFolder);
        setExplorerData(finalTree);
    }

    return (
        <>
            <div className='__File_Explorer_Body' >
                <nav className='__File_Explorer' >
                    <h2 className='__File_Explorer_Title' >File Explorer</h2>
                    <Folder insertInTree={insertFileORFolderInTree} Explorer={explorerData} />
                </nav>

            </div>
        </>
    )
}



export default FileExplorer


