import axios from 'axios';
import moment from 'moment';
import  sdk from 'bce-sdk-js';

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
        return '/v1' + path + file.file.name;
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
const reqMiddleWare = (instance) => {
    instance.interceptors.request.use(
        config => {
            const data = config.data;
            /**
             * change request config parameters
             */
            const urldata = {
                "httpMethod": "PUT",
                "path": inerTools.path_compile(data.path, data.file),
                "headers": {
                    "x-bce-date": inerTools.create_time_zone(),
                    "Content-Type": `${data.file.file.type}; charset=UTF-8`,
                    "Host": "fog-pub-cfz.gz.bcebos.com",
                    "Content-Length": data.file.file.size
                }
            }
            config.url = config.url + `&httpMethod=${urldata.httpMethod}&path=${urldata.path}&queries={}&headers=${encodeURIComponent(JSON.stringify(urldata.headers))}`;
            config.data = undefined;
            return config
        },
        error => {
            return Promise.reject(error);
        }
    );
}

// const UploadTOBos = async (data, param) => {
//     console.log(param);
//     const instance = axios.create({
//         baseURL: 'https://fog-pub-cfz.gz.bcebos.com',
//         timeout: 10000
//     });
//     const response = await instance({ 
//         method: 'POST',
//         headers: {
//             "Authorization": data.signature,
//             "Content-Type": "text/plain"
//         } 
//     });
//     console.log(response);
//     // return data;
// }

const readBlobAsDataURL = (blob, callback) => {
    var a = new FileReader();
    a.onload = function(e) {
        callback(a.result);
    };
    a.readAsDataURL(blob);
}

const UploadObject = async (data, file) => {
    const client = new sdk.BosClient({
        endpoint: 'https://fog-pub-cfz.gz.bcebos.com',
        // credentials: {
        //     ak: 'fba8a9c577a443ab80d1f7111ea97ea3',
        //     sk: '3181d962dff94ebd91a30035db68736a'
        // },
    });
    const defered = sdk.Q.defer();
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

    readBlobAsDataURL(file.file , (response) => {
        // console.log(response.toString('base64'));
        client.putObjectFromBlob('fog-pub-cfz', key, response.toString('base64'), opt)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    });
    


    // const bucket = 'fog-pub-cfz';
    // const key = file.file.name;
    // const blob = file.file;
    // const ext = key.split(/\./g).pop();
    // let mimeType = sdk.MimeType.guess(ext);
    // const opt = {
    //     "content-type": mimeType + '; charset=UTF-8',
    //     "content-length": file.file.size,
    //     // "authorization": data.signature,
    //     // "Host": "https://fog-pub-cfz.gz.bcebos.com",
    //     // "x-bce-date": data.xbceDate
    // }
    // const config = {
    //     endpoint: 'https://fog-pub-cfz.gz.bcebos.com',
    //     credentials: {
    //         ak: 'fba8a9c577a443ab80d1f7111ea97ea3',
    //         sk: '3181d962dff94ebd91a30035db68736a'
    //     }
    // }
    // const client = new sdk.BosClient(config);
    // console.log(bucket, key, blob, opt);

    // var dataUrl = new Buffer('hello world').toString('base64');
    // const result = client.putObjectFromDataUrl(bucket, 'test.txt', dataUrl, opt);
    // return result;
}

export default async function uploadFn (param){
    const instance = axiosInstance(param.baseURL);
    reqMiddleWare(instance);
    const data =  await instance({
        method: 'get',
        url: param.url,
        data: param.data
    });
    // const uploadStatus = await UploadObject(data.data, param.data);
    const datas = await UploadObject(data.data, param.data.file);
    console.log(datas);
    // return data; 
}



