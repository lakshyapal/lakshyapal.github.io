let url = "http://www.omdbapi.com/?i=tt3896198&apikey=bc5a776e"
let htmlStr = "" // html to be populated is store in this variable 
let rating=[]
let loderImageAddress = "https://loading.io/spinners/coolors/lg.palette-rotating-ring-loader.gif"
let defaultImgaeAddress = "http://www.crgapartments.com/templates/crg-cambridgerealtygroup/images/no-image.png"

$(document).ready(()=>{

	$('#form1,#form2').submit((e)=>{

		e.preventDefault();

		if($('#title').val() ==null || $('#title').val() =="" ){
			alert('Title cannot be left blank');
			return false;
		}
		$('.movie-content').html(``);
		htmlStr = "";
		$('.modal-body').css('background-image','');
		$('#img').attr('src',`${loderImageAddress}`)
		$('#exampleModal').modal('show')
		getThePromiceData(url,$('#form1').serialize())
		.then((data)=> populateData(data)) // call the populate function on promise resolve
		.catch( (err)=>console.log(err))	// reject if some error occur
	});	


});



let getThePromiceData = (url,formData)=>{

	return new Promise((resolve,reject)=>{

			$.ajax({
	        type: 'GET',
	        dataType: 'json',
	        async: true,
	        url: `https://www.omdbapi.com/?${formData}&apikey=bc5a776e`,
	        success: (data) => {
	            console.log(data)
	            resolve(data);
	        },
	        error: (data) => { // in case of error response

	            reject(new Error("some error occured"));

	        },

	        beforeSend: () => { // while request is processing.

	            console.log("request is being made. please wait")

	        },
	        complete: () => {

	            console.log("data fetched success")

	        },

	        timeout:3000 // this is in milli seconds

	    }); // end of AJAX request

	});
}

let populateData = (data) =>{

	
	$('.modal-body').css({
		'background-image':`url(${data.Poster})`,
		'min-height':'80vh',
		'background-repeat':'no-repeat',
		'background-size':'cover'
	});
	// to check if response is true and poster image is available else display default image.
	(data.Response == "True")? (data.Poster !="N/A")? $('#img').attr('src',`${data.Poster}`):$('#img').attr('src',`${defaultImgaeAddress}`) :$('#img').attr('src','');

	htmlStr +=`<div class="align-items-center"><div class="card-columns">`

	Object.entries(data).forEach(([key, value]) => { //looping over object
		
		if(key !== "Response" && key !=="Poster"){

			if(typeof(value) == "object"){ // for getting rating
				Object.values(value).forEach((key)=>{
					rating.push(`${key.Source}:` + `${key.Value}<br> `)
				})

				value = rating.join(" ")
			} 

             htmlStr += `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
						  <div class="card-header">${key}</div>
						  <div class="card-body">
						    <h5 class="card-title">${value}</h5>
						  </div>
						</div>`
			rating = [];
		}

	});
	htmlStr +=`</div></div>`;
	$('.movie-content').html(htmlStr)

}

