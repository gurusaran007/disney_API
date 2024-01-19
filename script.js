
var container = document.createElement("div");
container.className="container";
container.className="main";


var row = document.createElement("div");
row.className="row";


async function get_data()
{
    var res = await fetch("https://api.disneyapi.dev/character");
    var final_res = await res.json();


    console.log(final_res);
   
   read_data(final_res);
}

get_data();






function read_data(final_res)
{
    try{
    
        
        for(let i=0;i<final_res.data.length;i++)
        {
           
         
            console.log(final_res.data[i].name);
            var col = document.createElement("div");
            col.className="col-xs-4";
            col.innerHTML += 
            `
            <img src=${final_res.data[i].imageUrl} class="rounded float-left" alt=${`disney`}>`
            
            

             row.append(col);
             container.append(row);
             document.body.append(container);
           }
            

        }

        catch(error)
        {
            console.log("data lost");
        }
    
    }
   