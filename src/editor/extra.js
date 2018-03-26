import axios from 'axios';
import moment from 'moment';
import sdk from 'baidubce-sdk/baidubce-sdk.bundle';

const BUCKET = 'fog-pub-cfz';

const axiosInstance = (url) => {
    const instance = axios.create({
        baseURL: url,
        timeout: 10000,
    });
    return instance;
}

const inerTools = {
    create_time_zone() {
        const date = new Date().toISOString().split('.')[0] + "Z";
        return date;
    },
    path_compile(path, file) {
        return '/v1/' + path + '/' + file.file.name;
    }
}

/**
 * 拦截请求，并拼装成所需的
 * @param {*} instance 
 * 
 * param : {
 *    bos_bucket: "",
 *    bos_endpoint: "",
 *    uptoken_url: "",
 *    file: ""
 * } 
 * 
 * 请求所需参数
 *  token: 16094aae6bf09f16f6a1617b5869f0a0078f170a
    httpMethod: PUT
    path: "/v1/" + 上传的文件路径
    headers: {
      "x-bce-date": "",
      "Content-Type": "",
      "Host": "",
      "Content-Length": ""
    }
 * 
 */

const UploadObject = async (data, file, path) => {
    const client = new sdk.BosClient({
        endpoint: 'https://fog-pub-cfz.gz.bcebos.com',
    });
    const defered = sdk.Q.defer();
    const defereded = sdk.Q.defer();
    client.createSignature = () => {
        defered.resolve(data.signature, data.xbceDate);
        return defered.promise;
    }
    const key = file.file.name;
    const blob = file.file;
    const ext = key.split(/\./g).pop();
    let mimeType = sdk.MimeType.guess(ext);

    const opt = {
        'Content-Type': mimeType + '; charset=UTF-8'
    };
    client.putObjectFromBlob(BUCKET, key, blob, opt)
        .then(res => {
            const url = `https://fog-pub-cfz.gz.bcebos.com/${path}/${key}`;
            defereded.resolve(url);
        })
        .catch(err => {
            console.log(err);
        });
    return defereded.promise;
}

export default async function uploadFn (param){
    const instance = axiosInstance(param.baseURL);
    const data =  await instance({
        method: 'get',
        url: param.url,
        params: {
            "httpMethod": "PUT",
            "path": inerTools.path_compile(param.data.path, param.data.file),
            "headers": {
                "x-bce-date": inerTools.create_time_zone(),
                "Content-Type": `${param.data.file.file.type}; charset=UTF-8`,
                "Host": "fog-pub-cfz.gz.bcebos.com",
                "Content-Length": param.data.file.file.size
            }
        }
    });
    const datas = await UploadObject(data.data, param.data.file, param.data.path);
    return datas; 
}
