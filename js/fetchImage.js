const listPic = document.querySelector('.list-pic');
const loadBtn = document.querySelector('#loadBtn');
let pageToPatch = 1;


loadBtn.addEventListener('click', ()=>{fetchImages(pageToPatch += 1)});

async function fetchImages(page){
    try{
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`);

        if(!response.ok){
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }

        // 제이슨 데이터를 자바스크립트 객체로 파싱
        const datas = await response.json();
        console.log(datas);
        makeImageList(datas);

    }catch(error){
        console.error(error);
    }
}
function makeImageList(datas){
    datas.forEach((data)=>{
        listPic.insertAdjacentHTML('beforeend', `<li><img src="${data.download_url}" alt=""></li>`);
    });
    listPic.style.display = "flex";
}