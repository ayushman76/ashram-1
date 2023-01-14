let jsSyllabus= [
    {
        title: "Introduction",
        icon: "../assest/images/bulb.svg",
        theoryLink:"",
        exampleLink:"",
        id:"syl1"
    },{
        title: "How to install ?",
        icon: "../assest/images/question.svg",
        theoryLink:"https://programmingashram.github.io/ashram-teams/",
        exampleLink:"https://stackblitz.com/edit/js-doms?embed=1&file=index.js&hideNavigation=1&theme=light",
        id:"syl2"
    },{
        title: "Function in JS",
        icon: "../assest/images/function.svg",
        theoryLink:"https://programmingashram.github.io/javascript-function/",
        exampleLink:"https://stackblitz.com/edit/js-nwxnjw?embed=1&file=index.js&theme=light",
        id:"syl3"
    }
]

let jsData = document.getElementById('blog-space');

for(let i in jsSyllabus){
    jsData.innerHTML +=`
    <div class="blog rounded mt-3">
        <a class="nav-link rounded blog-card p-0 shadow-lg" data-bs-toggle="collapse" href="#${jsSyllabus[i].id}" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div class="d-flex justify-content-start align-items-center px-2">
                <div>
                    <img src="${jsSyllabus[i].icon}" alt="" class="syl-icon">
                </div>
                <div class="title-header p-3">
                    <h1 class="h6 mb-0 text-dark">${jsSyllabus[i].title}</h1>
                </div>
            </div>
        </a>
        <div class="collapse" id="${jsSyllabus[i].id}">
            <div class="card card-body">
            <iframe src="${jsSyllabus[i].theoryLink}" sandbox="allow-same-origin" class="mb-3" id="read-iframe">
                </iframe>

                <div class="stack-iframe mt-2">
                    <iframe src="${jsSyllabus[i].exampleLink}"  frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </div>
    `;
}