const fs = require('fs');
const folderPath = '../doc';  

let arr=[];
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Unable to scan directory:', err);
    return;
  }
  files.forEach(file => {
    
    if(/\.md$/.test(file)){
      arr.push(file);
    }

  });
});


// 나중에좀하자.
/*
깃허브블로그는
ㄴ서버구성못함.
ㄴ이게한계인듯.
ㄴ흠.
서버구성
ㄴ이게되는부분을
ㄴ어디서
ㄴ연습해야될지
ㄴ계속고민ㄱㄱ.
실제호스팅
ㄴ서비스하려면
ㄴ어떻게되는지.
결국
ㄴAWS
ㄴ이쪽으로가야되나
ㄴ싶기도하고.
ㄴ안가고픈데.
ㄴ해야되나
ㄴ싶기도하고.
ㄴ그럼.;;;

결론은
ㄴ서버측
ㄴ코드
ㄴ칠만한곳.
ㄴ이부분을
ㄴ찾는다는것.!!!
ㄴ대체재
ㄴ필히찾을것.
ㄴㄱㄱ.!!!
*/