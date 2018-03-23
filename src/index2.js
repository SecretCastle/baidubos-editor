import sdk from 'bce-sdk-js';
const upload = document.getElementById('upload');

upload.addEventListener('change', (evt) => {
    const file = evt.target.files[0];
    const config = {
        endpoint: 'http://bos.bj.baidubce.com',
        credentials: {
            ak: 'fba8a9c577a443ab80d1f7111ea97ea3',
            sk: '3181d962dff94ebd91a30035db68736a'
        }
    };
    let client = new sdk.BosClient(config);

    let bucket = 'fog-pub-cfz';
    let key = file.name;
    let blob = file;
    
    var ext = key.split(/\./g).pop();
    var mimeType = sdk.MimeType.guess(ext);
    if (/^text\//.test(mimeType)) {
        mimeType += '; charset=UTF-8';
    }
    var options = {
        'Content-Type': mimeType
    };
    client.putObjectFromString(bucket, 'test.txt', 'hello world', options)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}, false);

// import sdk from 'bce-sdk-js';


// const client = sdk.BosClient({
//     endpoint: ' fog-pub-cfz.gz.bcebos.com',
//     credentials: {
//         ak: 'fba8a9c577a443ab80d1f7111ea97ea3',
//         sk: '3181d962dff94ebd91a30035db68736a'
//     }
// });


// client.putObjectFromString('fog-pub-cfz', 'hello.js', 'hello world').then(res => {
//     console.log(res);
// })