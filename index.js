

async function display(){
    try{
        let res=await fetch ('https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyBIjLeJLwVwSj8Q1pz9450qpg4ori1Sd28')
        let data=await res.json()
        if(data.items)
        {
            let root=document.getElementById("root")
            data.items.forEach((e)=>{
                let divya=document.createElement("div")
                divya.innerHTML=`<div class="card" style="width: 20rem; margin:10px; padding:15px; height:22rem;">
                <img src=${e.volumeInfo.imageLinks.thumbnail} alt="flags" class="thumbnail">
                <div class="card-body" style="text-align:center;">
                  <h4 class="card-title">${e.volumeInfo.title}}</h4>
                  <div class="card-language">Language:${e.volumeInfo.language}</div>
                  <div class="card-text">Page Count: ${e.volumeInfo.pageCount}</div>
                  <div><a href="${e.volumeInfo.previewLink}" class="btn-primary">Preview Of This Book</a></div>
                 <div><a href="${e.accessInfo.epub.downloadLink}" class="btn-primary">Download</a></div>
                  <div><a href="${e.saleInfo.buyLink}" class="btn-primary">Buy Book</a></div>
                </div>
              </div>`
              root.append(divya)
            })
        }
        else{

        }
         }
     catch(error)
        {
        console.log(error)
        }}
display()
 