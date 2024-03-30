

nomor1()
nomor2A()
nomor2B()
nomor3()
nomor4()
// Jawaban Nomor 1
function nomor1(){
    const jb1=document.getElementById('no1')

    const word="NEGIE1"
    let wordResult=""
    for(i=word.length-2;i>=0;i--){
        wordResult+=word[i]
    }
    wordResult+=word[word.length-1]
    jb1.innerHTML=wordResult
}
// No 2 cara A
function nomor2A(){
    const jb2=document.getElementById('no2A')

    const words="Diberikan contoh sebuah kalimat"
    const wordArr=words.split(' ');
    const list= wordArr.map((el)=>{
        return el.length
    })
    jb2.innerHTML=Math.max(...list)
}

// No 2 cara B
function nomor2B(){
    const jb2=document.getElementById('no2B')

    const words="Diberikan contoh sebuah kalimat"
    const wordArr=words.split(' ');
    const list= wordArr.map((el)=>{
        return el.length
    })
    let result=0;
    for(i=0;i<list.length;i++){
        if(result<=list[i])result=list[i]
    }
    // console.log(result);
    jb2.innerHTML=result
}

function nomor3(){
  const INPUT = ['xc', 'dz', 'bbb', 'dz']  
  const QUERY = ['bbb', 'ac', 'dz'] 

  const res= QUERY.map((el)=>{
    return INPUT.filter((e)=>e===el).length
  })
  const jb3=document.getElementById('no3')
  jb3.innerHTML="["+res.toString()+"]"
}

function nomor4(){
    const matrix=[[1, 2, 0], [4, 5, 6], [7, 8, 9]]
    let diagonal1=0;
    let diagonal2=0;
    for(i=0; i<matrix.length; i++){
        diagonal1+=matrix[i][i]
        diagonal2+=matrix[i][matrix.length-i-1]
    }
    const jb4=document.getElementById('no4')
    jb4.innerHTML=diagonal1-diagonal2
    
}