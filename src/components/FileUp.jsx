import React from "react";
import { useState } from "react";
export const FileUp = () => {
    const [file, setFile] = useState();
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
        setFile(fileReader.result);
    }
    const handleOnChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        setFile(file)
        fileReader.readAsDataURL(file);
    }
    return (
        <div>
            <form>
                <input type="file" name="file" id="file"
                    onChange={handleOnChange}
                />
                <div value={file} height={100}></div>
                <input type="submit" value="send" />
            </form>
            <iframe src={file} height="500px" width="500px" title="rea"></iframe>
        </div>
    );
}

