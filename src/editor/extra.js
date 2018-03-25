import sdk from 'baidubce-sdk/baidubce-sdk.bundle';

var endpoint = 'https://fog-pub-cfz.gz.bcebos.com';
var bucket = 'fog-pub-cfz';
var tokenUrl = 'https://cnapitest.fogcloud.io/get_bos_sign/'
var client = new sdk.BosClient({
    endpoint
});

client.createSignature = function(_, httpMethod, path, params, headers) {
    var deferred = sdk.Q.defer();
    $.ajax({
        url: tokenUrl,
        dataType: 'json',
        method: 'get',
        data: {
            fog_token: 'ut 16094aae6bf09f16f6a1617b5869f0a0078f170a',
            httpMethod: httpMethod,
            path: path,
            params: JSON.stringify(params || {}),
            headers: JSON.stringify(headers || {})
        },
        success: function (payload) {
            if (payload.statusCode === 200 && payload.signature) {
                deferred.resolve(payload.signature, payload.xbceDate);
            }
            else {
                deferred.reject(new Error('createSignature failed, statusCode = ' + payload.statusCode));
            }
        }
    });
    return deferred.promise;
}

export default function UploadFn (params) {
    console.log(params);
    var file = params.file;
    var key = file.name;
    var blob = file;
    var id = +new Date();
    var deferred = sdk.Q.defer();
    var ext = key.split(/\./g).pop();
    var mimeType = sdk.MimeType.guess(ext);
    if (/^text\//.test(mimeType)) {
        mimeType += '; charset=UTF-8';
    }
    var options = {
        'Content-Type': mimeType
    };

    // 以下逻辑与基本示例中的相同
    var promise = client.putObjectFromBlob(bucket, key, blob, options);
    client.on('progress', function (evt) {
        // 上传中
        console.log(evt);
    });
    promise.then(function (res) {
            // 上传成功
            console.log(res);
            deferred.resolve(res);
        })
        .catch(function (err) {
            // 上传失败
            console.log(err);
            deferred.reject(res);
        });
    return deferred.promise;
};
