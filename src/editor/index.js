import 'babel-polyfill';
import React, { Component } from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'
import sdk from 'baidubce-sdk/baidubce-sdk.bundle';
import axios from 'axios';

class MyEditor extends Component {
    componentDidMount() {
        // 建立bosclient
        const { endpoint, uptokenurl } = this.props;
        this.client = new sdk.BosClient({ endpoint });
    }

    create_time_zone() {
        const date = new Date().toISOString().split('.')[0] + "Z";
        return date;
    }

    path_compile(file, hasv1) {
        const { type, bucket } = this.props;
        const typeArr = type.split('-');
        let newPath = '';
        for (let index = 0; index < typeArr.length; index++) {
            newPath += `${typeArr[index]}/`;
        }
        if (hasv1) {
            return '/v1/' + bucket + '/' + newPath + file.name;
        } else {
            return '/' + bucket + '/' + newPath + file.name;
        }
    }

    getFileName(filename) {
        const { type } = this.props;
        const typeArr = type.split('-');
        let newPath = '';
        for (let index = 0; index < typeArr.length; index++) {
            newPath += `${typeArr[index]}/`;
        }
        return '/' + newPath + filename;
    } 

    handleChange = (content) => {
        console.log(content)
    }

    handleRawChange = (rawContent) => {
        console.log(rawContent)
    }

    uploadFn = (param) => {
        const { bucket, uptokenurl, endpoint } = this.props;
        const defered = sdk.Q.defer();
        const defereds = sdk.Q.defer();
        this.client.createSignature = (_, httpMethod, path, params, headers) => {
            path = this.path_compile(param.file, true);
            axios.get(
                uptokenurl,
                {
                    params:{
                        "httpMethod": "PUT",
                        "path": path,
                        "headers": {
                            "x-bce-date": this.create_time_zone(),
                            "Content-Type": `${param.file.type}; charset=UTF-8`,
                            "Host": "fog-pub-cfz.gz.bcebos.com",
                            "Content-Length": param.file.size
                        }
                    }
                }
            )
            .then(res => {
                if (res.data.statusCode === 200 && res.data.signature) {
                    console.log('run');
                    defered.resolve(res.data.signature, res.data.xbceDate);
                } else {
                    defered.reject(res.data.statusCode);
                }
            })
            return defered.promise;
        }

        const blob = param.file;
        const key = this.getFileName(param.file.name);
        const ext = key.split(/\./g).pop();
        let mimeType = sdk.MimeType.guess(ext);

        const opt = {
            'Content=Type': mimeType + '; charset=UTF-8'
        };

        this.client.putObjectFromBlob(bucket, key, blob, opt)
            .then(res => {
                if (res) {
                    const url = endpoint + this.path_compile(param.file, false);
                    param.success({
                        url
                    })
                }
            })
            .catch(err => {
                console.log(err);
            });
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
           <BraftEditor {...editorProps}/>
        )
    }
}

export default MyEditor