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
        UploadFn({
            baseURL: 'https://cnapitest.fogcloud.io',
            url: '/get_bos_sign/?fog_token=ut 16094aae6bf09f16f6a1617b5869f0a0078f170a',
            data: {
                file: param,
                path: 'fog-pub-cfz'
            }
        })
        .then(res => {
            console.log(res);
            param.success({
                url: res 
            })
        })
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
            </div>
        )
    }
}

export default MyEditor