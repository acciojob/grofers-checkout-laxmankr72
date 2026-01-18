const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

    const prices = document.querySelectorAll(".prices");
    let total = 0;

    prices.forEach(price => {
        total += Number(price.innerText);
    });

    const table = document.querySelector("table");

    const tr = document.createElement("tr");
    const td = document.createElement("td");

    td.setAttribute("colspan", "2");
    td.setAttribute("id", "ans"); 
    td.innerText = total;         

    tr.appendChild(td);
    table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);
