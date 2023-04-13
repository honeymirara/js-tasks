const express = require("express");

const app = express();
const port = 3000;

app.get('/', function(req, res){
    
        const arr = [1, 2, 2, 4, 4];
        let arrUniq = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != arr[i + 1] && arr[i] != arr[i - 1]) {
                arrUniq.push(arr[i]);
            }
        }
        response.send(arrUniq);
    
    });

    
    function slice_array(slice_len) {
        const arr = [1, 2, 3, 4, 5, 6];
        const result = [];
        
        for (let i = 0; i < arr.length; i++) {
            const slice = [];
            let j = 0;
            for (let i=0; j < slice_len; j++) {
                slice[slice.length] = arr[i + j];
            }
            i += j - 1
            result[result.length] = slice;
        }
        return result;
    }
    
    console.log(slice_array(1));
    console.log(slice_array(2));
    console.log(slice_array(3));

app.listen(3000, ()=> { console.log('server is running') });