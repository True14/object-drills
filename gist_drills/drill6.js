const str = 'craft block argon meter bells brown croon droop';

const message = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};


function decode(code){
  const word = code.split(' ');
  let decodeMessage = '';
  word.forEach(key => {
    if (message[key[0]]){
      decodeMessage += key[message[key[0]]-1];
    }

    else {
      decodeMessage += ' ';
    }
  });
  return decodeMessage;
}

console.log(decode(str));
