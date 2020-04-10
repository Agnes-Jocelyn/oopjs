 // fetch (URL).then(res => {
 //     return res.json()
 // }).then(data =>{
 //     console.log(data);

 // }).catch(err => {
 //     console.log(err);

 // })

 // Using Axios to get data
 const URL = ('https://api.github.com/users/agnes-jocelyn/followers')
 axios.get(URL)
     .then(response => {
         console.log(response);
         const listHTML = document.querySelector("#list>div")
         data = response.data;

         response.data.forEach(item => {
             const {
                 login,
                 html_url,
                 avatar_url
             } = item;
             const itemHtml = `
        <div class = "col-md-4">
            <div class="card" style="width: 15rem;">
                <img src="${avatar_url}" class="card-img-top">
                <div class="card-body">
                <span class="card-text"> Username : ${login} </span>
                <br> <br>
                <a href="${html_url}">
                     <button class =" btn btn-primary">
                     <i class="fab fa-github"></i>
                        To Profile
                    </button>
                </a>
                </div>
            </div>
        </div>
        `;
             listHTML.innerHTML += itemHtml;
         })
     })
     .catch(err => {
         console.error(err);
     })