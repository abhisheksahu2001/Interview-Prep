const useFileTree = () => {
    const insertNode = (tree, folderId, item, isFolder) => {
        if (tree.id == folderId && tree.isFolder) {
            tree.Files.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder,
                Files: [],
            })
            return tree;
        }
        let latestNode = []
        latestNode = tree.Files.map((ob) => {
            return insertNode(ob, folderId, item, isFolder);
        })
        return { ...tree, Files: latestNode }

    }
    return { insertNode }
}
export default useFileTree;