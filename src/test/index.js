import React, { Component } from 'react';
import File1 from './file1';
import File2 from './file2';


export class File extends Component {
    render() {
        return (
            <div>
                <h1>This is main File</h1>
                <h2>{console.log("hello world")}</h2>
                <File1 />
                <File2 />
            </div>
        );
    }
}

export default File;