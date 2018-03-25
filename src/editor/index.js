import React, { Component } from 'react'
import 'babel-polyfill';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'
import UploadFn from './extra';


class MyEditor extends Component {
    handleChange = (content) => {
        console.log(content)
    }

    handleRawChange = (rawContent) => {
        console.log(rawContent)
    }

    uploadFn = (param) => {
        UploadFn(param).then(res => {
            // console.log(res);
        })
        // console.log('upload', param);
        /**
         * 上传部分，开始了
         */

    }
    
    removeConfirmFn = (param) => {
        console.log('cancel', param);
    }

    fileUpload = (e) => {
        console.log(e.target.files);
    }

    render () {
        const editorProps = {
            height: 500,
            contentFormat: 'html',
            initialContent: '',
            onChange: this.handleChange,
            onRawChange: this.handleRawChange,
            media: {
                image: true,
                video: false,
                audio: false,
                uploadFn: this.uploadFn,
                removeConfirmFn: this.removeConfirmFn
            }
        }
        return (
            <div className="demo">
              <BraftEditor {...editorProps}/>
              <input type='file' accept="image/png" onChange={this.fileUpload}/>
            </div>
        )
    }
}

export default MyEditor