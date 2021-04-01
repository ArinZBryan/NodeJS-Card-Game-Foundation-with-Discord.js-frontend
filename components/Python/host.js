const pytalk = require('pytalk');


let worker = pytalk.worker('worker.py');
let blur = worker.methodSync('blur');

blur('image.jpg',(err,blurred) => {
    console.log(`Saved to ${blurred}`);
});