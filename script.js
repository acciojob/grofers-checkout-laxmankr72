const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

    const price = document.querySelectorAll(".prices");

    let total = 0;

   
    price.forEach(price => {
        total += Number(price.innerText);
    });


    const table = document.querySelector("table");

    const tr = document.createElement("tr");
	tr.innerHTML ="<td colspan=2></td>";
	tr.innerText = `Total Price: ${total}`;
	
	
    // const td = document.createElement("td");

    // td.setAttribute("colspan", "2");
    // td.innerText = `Total Price: ${total}`;

    // tr.appendChild(td);
    table.appendChild(tr);
  
};

getSumBtn.addEventListener("click", getSum);

