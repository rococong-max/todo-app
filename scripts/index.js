// 1. 글쓰기 폼 초기 숨기기
// 2. + 버튼 클릭 시 글쓰기 폼 보이기

const writeForm = document.querySelector('#write_form');
const writeFab = document.querySelector('#write_fab');
console.log(writeForm,writeFab)

writeForm.style.display = 'none'; // 1
writeFab.addEventListener('click', function(e){ // 2
    e.preventDefault;
    writeForm.style.display = 'block';
})

// 글쓰기 폼에 엔터 클릭시
// 폼에 할 일이 없다면 '<p>입력하세요</p>' 경고 출력
// 폼에 할 일이 있다면 글쓰기 폼 닫히고 기존 할 일 목록에 목록 추가하기
const writeContents = document.querySelector('#write_contents');
const confirmBtn = document.querySelector('#confirm_btn');
const errorP = writeForm.querySelector('.error') // document(최상위) 대신 writeForm(부모)로 입력 가능
console.log(writeContents,confirmBtn,errorP)

confirmBtn.addEventListener('click', function(){
    if(writeContents.value == ''){// 태그를 확인하는게 아니라 값(속성)을 확인하는 것
        // html에 태그가 있는 경우
        // errorP.style.color = '#f00'
        // errorP.textContent = '할 일을 입력하세요';
        // html에 태그가 없고 Js에서 태그를 객체로 생성한 경우
        const errP = document.createElement('p');
        errP.textContent = '할일을 입력하세요'
        errP.innerHTML = '할일을 <em>입력하세요</em>'
        errP.style.color = '#f00'
        writeForm.appendChild(errP);
    }
    // 할 일을 적은 상태일 경우
    if(writeContents.value != ''){// textarea의 값이 빈 값이 아닌 경우 참
        const allCon = document.querySelector('#all_con'); // ol 선택(자식 요소 삽입 위해 부모인 ol선택)
        const li = document.createElement('li'); // 생성위치(클릭이벤트 안)
        const dateA = document.createElement('a');// 클릭할때마다 생성 <a></a>
        const a = document.createElement('a');// 클릭할때마다 생성 <a></a>

        dateA.classList.add('date');// 기존 css의 디자인 통일을 위해 같은 이름 등록
        li.classList.add('contents4'); // 기존 클래스와 일치해서 디자인 적용 목적
        li.classList.add('contents'); // 기존 클래스와 일치해서 디자인 적용 목적
        
        dateA.textContent = '04.03'// 오늘 날짜 대입 (문자열)
        dateA.href = '#'; // a태그 생성 시 속성없이 기본생성 <a>, href속성 추가대입
        a.innerHTML = writeContents.value; // create으로 생성한 게 아닌 기존태그값을 대입
        
        li.appendChild(dateA); // li부모 안 마지막 자식 위치에 날짜A 삽입(먼저 시작하는 순서대로)
        li.appendChild(a); // 날짜 다음 순서로 삽입하는 create객체 삽입
        allCon.appendChild(li); // allCon > li > dateA + a 
        
        writeForm.style.display = 'none' // 등록 후 글쓰기 팝업 창 숨김
    }
})
