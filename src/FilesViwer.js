import { IconFolder, IconFile, IconFolderOpen } from './Icons'

export const FilesViwer = ({files, onBack, onOpen}) => {
    return (
        <table className="table">
            <tbody>
                <tr className="clickable" onClick={onBack}>
                    <td className="icon-row">
                        <IconFolderOpen />
                    </td>
                    <td>...</td>
                    <td></td>
                </tr>

                {
                    files.map(({name, directory, size}) => {
                        return (
                            <tr>
                                <td className="icon-row">
                                    {directory ? <IconFolder /> : <IconFile />}
                                </td>
                                <td>{name}</td>
                                <td>
                                    <span className="float-end">{size}</span>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}