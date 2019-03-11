/*
  Please add all Javascript code to this file.
*/
$(function(){

  var url ='https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=4638c29b70fb4f1590db4a5296c17250';

  
  fetch(url, {method:"get",datatype:"json"})
  .then(function(res)
  {
  return res.json();
  })
  
  .then(function(res)
  {
  // console.log(res.articles);
  let element=res.articles;
 for(let i=0;i<element.length;i++)
      {
          $("#popUp").hide()
              $("#main").append(`
              <article class="article">
              <section class="featuredImage">
              <img src="${element[i].urlToImage}" alt="" />
              </section>
              <section class="articleContent">
               <a href="#" class="btn" data-id="${i}"> <h3>${element[i].title}</h3></a>
               <h6>${element[i].description}</h6>
              </section>
               <section class="impressions">
               ${i}
               </section>
               <div class="clearfix"></div>
              </article>
              `)
            };

            $(".btn").click(function(){
              // let res = $(this).data("#id")
              var ref= $(this).closest("a").data("id");
              $("#popUp").empty();
              
              // $(".loader").addclass("hidden");
              $("#popUp").show()
              // $("#popUp").removeClass("loader hidden");
              // $("#popUp").addClass("loader").then(function(){
                
              //   $("#popUp").removeClass("loader")
              // });
              
             

               console.log(ref)
              $('#popUp').append(`
                
              <a href="#" class="closePopUp">X</a> 
              <div class="container">
              <h1>${element[ref].title}</h1>
              <p>
               ${element[ref].description}
              </p>
              <a href="${element[ref].url}" class="popUpAction" target="_blank">Read more from source</a>
              </div> 
             
              `) 
              
              $(".closePopUp").click(function()
              {
    
                console.log("xxxx")
    
                  $("#popUp").hide()
      
              });
  
            });
  });
  
  
  
  });