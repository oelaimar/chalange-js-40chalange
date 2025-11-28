//the array
const workers = [
    { id: 1, name: 'Alice Dupont', role: 'Manager', city: 'Paris', salary: 60000, active: true, hireDate: '2023-01-15' },
    { id: 2, name: 'Bob Martin', role: 'Developer', city: 'Lyon', salary: 55000, active: true, hireDate: '2022-06-10' },
    { id: 3, name: 'Claire Bernard', role: 'Designer', city: 'Paris', salary: 48000, active: false, hireDate: '2024-02-01' },
    { id: 4, name: 'David Leroy', role: 'Developer', city: 'Lyon', salary: 52000, active: true, hireDate: '2021-08-20' },
    { id: 5, name: 'Eve Dubois', role: 'Manager', city: 'Marseille', salary: 62000, active: true, hireDate: '2020-03-05' },
]

//global variable
const chalange1 = document.getElementById('chalange1');
const chalange2 = document.getElementById('chalange2');
const chalange3 = document.getElementById('chalange3');
const chalange4 = document.getElementById('chalange4');
const chalange5 = document.getElementById('chalange5');
const chalange6 = document.getElementById('chalange6');
const chalange7 = document.getElementById('chalange7');
const chalange8 = document.getElementById('chalange8');
const chalange9 = document.getElementById('chalange9');
const chalange10 = document.getElementById('chalange10');
const chalange11 = document.getElementById('chalange11');
const chalange12 = document.getElementById('chalange12');
const chalange13 = document.getElementById('chalange13');
const chalange14 = document.getElementById('chalange14');
const chalange15 = document.getElementById('chalange15');
const chalange16 = document.getElementById('chalange16');
const chalange17 = document.getElementById('chalange17');
const chalange18 = document.getElementById('chalange18');
const chalange19 = document.getElementById('chalange19');
const chalange20 = document.getElementById('chalange20');
const chalange21 = document.getElementById('chalange21');
const chalange22 = document.getElementById('chalange22');
const chalange23 = document.getElementById('chalange23');
const chalange24 = document.getElementById('chalange24');
const chalange25 = document.getElementById('chalange25');
const chalange26 = document.getElementById('chalange26');
const chalange27 = document.getElementById('chalange27');
const chalange28 = document.getElementById('chalange28');
const chalange29 = document.getElementById('chalange29');
const chalange30 = document.getElementById('chalange30');
const chalange31 = document.getElementById('chalange31');
const chalange32 = document.getElementById('chalange32');
const chalange33 = document.getElementById('chalange33');
const chalange34 = document.getElementById('chalange34');
const chalange35 = document.getElementById('chalange35');
const chalange36 = document.getElementById('chalange36');
const chalange37 = document.getElementById('chalange37');
const chalange38 = document.getElementById('chalange38');
const chalange39 = document.getElementById('chalange39');
const chalange40 = document.getElementById('chalange40');


//challange 1 
chalange1.innerHTML = `<span>Total Employees: ${workers.length}</span>`

//chalange 2 
chalange2.innerHTML = "";

chalange2.innerHTML += "<ul>";

workers.forEach(worker => {
    chalange2.innerHTML += `
        <li>${worker.name}</li>
    `;
});

chalange2.innerHTML += "</ul>";

//chalange 3
chalange3.innerHTML = "";
chalange3.innerHTML = `<span>Name: ${workers[2].name} | role: ${workers[2].role}</span>`;

//chalange 4
chalange4.innerHTML = "";
workers.forEach(worker => {
    chalange4.innerHTML += `<span>${worker.name}</span><span style="color:${worker.active ? "green" : "red"}"> ${worker.active ? "Active" : "Inactive"}</br></span>`;
});

//chalange 5
chalange5.innerHTML = "";

let randomNumb = Math.floor((workers.length) * Math.random());
chalange5.innerHTML = `<button id="chalange5Btn" style="height:20px;">the role of: ${workers[randomNumb].name} </button>`;

const chalange5Btn = document.getElementById('chalange5Btn');

chalange5Btn.addEventListener('click', () => {
    alert(`the role of ${workers[randomNumb].name} id ${workers[randomNumb].role}`)
});

//chalange 6 
chalange6.innerHTML = "";
chalange6.innerHTML = `<input id="chalange6Input"></br>`;
chalange6.innerHTML += `<span id="inputResult"></span>`;


const chalange6Input = document.getElementById('chalange6Input');
const inputResult = document.getElementById('inputResult');
inputResult.innerHTML = `Input value:`;

chalange6Input.addEventListener('input', () => {
    inputResult.innerHTML = `Input value: ${chalange6Input.value}`
});

//chalange 7
workers.forEach(worker => {
    chalange7.innerHTML += `<button class="chalange7Btns" style="height:20px;">${worker.name}</button></br></br>`
});

const chalange7Btns = document.querySelectorAll('.chalange7Btns');

chalange7Btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('selected');
    });
});

//chalange 8
chalange8.innerHTML = "";
chalange8.innerHTML = `<button id='chalange8Toggle'>toggle state</button>
                        <div id="divChalange8" class="smullBox"></div>
                    `;

const chalange8Toggle = document.getElementById('chalange8Toggle');
const divChalange8 = document.getElementById('divChalange8')

chalange8Toggle.addEventListener('click', () => {
    divChalange8.classList.toggle('smullBox');
    divChalange8.classList.toggle('bigBox');
});

//chalange 9 
chalange9.innerHTML = "";
chalange9.innerHTML = "<span>Employees in Paris: </br></span>";

const onlyInParisWorkers = workers.filter((worker) => worker.city == "Paris");

onlyInParisWorkers.forEach(worker => {
    chalange9.innerHTML += `
        <span>${worker.name}</br></span>
    `
});

//chalange 10
chalange10.innerHTML = "";

chalange10.innerHTML = `Title will update after 2 seconds...</br>`;
chalange10.innerHTML += `<button id="chalange10Btn">Trigger Update</button>`;

const chalange10Btn = document.getElementById('chalange10Btn');

chalange10Btn.addEventListener('click', () => {
    chalange10.innerHTML = "Title will update...";
    setTimeout(() => {
        chalange10.innerHTML = "✓ Personnel List Updated!";
    }, 2000);
});

//chalange 11
const workersAndSalary = workers.map((worker) => {
    const newworkers = { name: worker.name, salary: worker.salary }
    return newworkers;
});

workersAndSalary.forEach((worker) => {
    chalange11.innerHTML += `
            name: ${worker.name} salary: ${worker.salary}</br>
        `;
});

//chalange 12
const workerFiltredWithSalary = workers.filter((worker) => worker.salary > 50000);
chalange12.innerHTML = "";
workerFiltredWithSalary.forEach((worker) => {
    chalange12.innerHTML += `name: ${worker.name} salary: ${worker.salary}`;
});

//chalange 13
chalange13.innerHTML = "";
workers.forEach(worker => {
    chalange13.innerHTML += `<button class="chalange13Btns" data-id="${worker.id}">click to see the index of ${worker.name}</button>`;
});

const chalange13Btns = document.querySelectorAll('.chalange13Btns');

chalange13Btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const theWorker = workers.find(worker => btn.dataset.id == worker.id);
        const theIndex = workers.findIndex(worker => btn.dataset.id == worker.id);
        alert(`the index of ${theWorker.name} is ${theIndex}`);
    });
});

//chalange 14
chalange14.innerHTML = "";
const totalSalary = workers.reduce((total, worker) => { return total + worker.salary }, 0)
chalange14.innerHTML = `Total Salary: ${totalSalary}`;

//chalange 15
chalange15.innerHTML = "";
const sortedWorkers = workers.sort((a, b) => a.name.localeCompare(b.name));

workers.forEach(worker => {
    chalange15.innerHTML += `${worker.name}</br>`;
});

//chalange 16
chalange16.innerHTML = "";
chalange16.innerHTML = "<ul>"
Object.keys(workers[0]).forEach(key => {
    chalange16.innerHTML += `<li>${key}</li>`;
});

//chalange 17
chalange17.innerHTML = "";

const infoWorker1 = Object.entries(workers[0]);
const table = document.createElement("table");

infoWorker1.forEach(worker => {
    const tableCell = document.createElement("tr");

    tableCell.innerHTML = `
    <td>${worker[0]}</td>
    <td>${worker[1]}</td>                   
    `;
    table.appendChild(tableCell);
});

chalange17.appendChild(table);

//chalange 18
chalange18.innerHTML = "";

chalange18.innerHTML = `
<form id="chalange18Form">
    <label for="name">name:</label>
    <input type="text" id="nameInput" name="name">
    <label for="roleInput">role:</label>
    <input type="text" id="roleInput" name="role">
    <button type="submit">add employee</button>
</form>
`;

const chalange18Form = document.getElementById('chalange18Form');
const nameInput = document.getElementById('nameInput');
const roleInput = document.getElementById('roleInput');

chalange18Form.addEventListener('submit', (e) => {
    e.preventDefault();

    if ((nameInput.value.trim() != '') && (roleInput.value.trim() != '')) {
        const newworker = { name: `${nameInput.value}`, role: `${roleInput.value}` };

        workers.push(newworker);
    }

    //to see th the worker was added
    console.log(workers);

    chalange18Form.reset();

});

//chalange 19
chalange19.innerHTML = "";

function displayWorkers() {
    chalange19.innerHTML = "";
    workers.forEach((worker, index) => {
        chalange19.innerHTML += `<span>${worker.name}</span><button data-id='${index}' class="deleteWorkerBtn">delete</button></br>`;
    });
    const deleteWorkerBtn = document.querySelectorAll('.deleteWorkerBtn');
    deleteWorkerBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            workers.splice(btn.dataset.id, 1);
            displayWorkers();
        });
    });
}
displayWorkers();

// chalange 20
chalange20.innerHTML = "";
const WorkerCloned = [...workers];

const newWorkers = WorkerCloned.map(worker => worker.name);

chalange20.innerHTML = `
    <ul>
        ${newWorkers.map(name => `<li>${name}</li>`).join("")}
    </ul>
`;

//chalange 21
chalange21.innerHTML = "";

const worker10OFF = workers.map((worker) => {
    const worker10OFF = { name: worker.name, salary: worker.salary + (worker.salary * 0.1) };
    return worker10OFF;
});

worker10OFF.forEach(worker => {
    chalange21.innerHTML += `<span>name: ${worker.name} new salary: ${worker.salary}</span></br>`;
});

//chalange 22
chalange22.innerHTML = "";

const citygrouped = workers.reduce((cityGroup, worker) => {
    if (!cityGroup[worker.city]) {
        cityGroup[worker.city] = [];
    }
    cityGroup[worker.city].push(worker);
    return cityGroup;
}, {});

const citys = ['Paris', 'Lyon', 'Marseille'];

citys.forEach(city => {
    chalange22.innerHTML += `<span>${city}</br></span>`;
    citygrouped[city].forEach(worker => {
        chalange22.innerHTML += `<span style="color:green">${worker.name}</br></span>`;
    });
});

//chalange 23
chalange23.innerHTML = "";

const isAWorkerNotActive = workers.some(worker => worker.active === false);

if (isAWorkerNotActive) {
    chalange23.innerHTML = '<span style="background-color: red">⚠️ Warning: Some employees are inactive!</span>';
}

//chalange 24
chalange24.innerHTML = "";

const isAWorkerHasMoreThan3000 = workers.every(worker => worker.salary > 30000);

if (isAWorkerHasMoreThan3000) {
    chalange24.innerHTML = '<span style="background-color: green">✓ All employees earn more than $30,000</span>';
}

// chalange 25
chalange25.innerHTML = "";
const cloneWorkers = structuredClone(workers);
cloneWorkers[0].salary = 75000;
chalange25.innerHTML = `<span>Original salary: ${workers[0].salary}$</br></span>
                        <span>Original salary: ${cloneWorkers[0].salary}$</br></span>`;


//chalange 26
chalange26.innerHTML = "";

chalange26.innerHTML = `<input id="theSearchBar" placeholder="search by name or role">`;
const theSearchBar = document.getElementById('theSearchBar');
const searshingDiv = document.createElement('div');

theSearchBar.addEventListener('input', () => {
    const searchedWorkers = [];
    workers.forEach(worker => {
        if ((worker.name.toLowerCase()).includes(theSearchBar.value.toLowerCase()) || (worker.role.toLowerCase()).includes(theSearchBar.value.toLowerCase())) {
            searchedWorkers.push(worker)
        }
    });
    searshingDiv.innerHTML = "";
    if (theSearchBar.value.trim() !== '') {
        searchedWorkers.forEach(worker => {
            searshingDiv.innerHTML += `<span>${worker.name} ${worker.role}</br></span>`;
        });
    }
    chalange26.appendChild(searshingDiv);
});

//chalange 27

chalange27.innerHTML = "";

chalange27.innerHTML = `<label for="roleSelection">Choose a role:</label>
                            <select id="roleSelection">
                                <option value="">--Please choose an option--</option>
                                <option value="Manager">Manager</option>
                                <option value="Developer">Developer</option>
                                <option value="Designer">Designer</option>
                            </select>`;

const roleSelection = document.getElementById('roleSelection');
const rolesSelectionDiv = document.createElement('div');

listByRole();
roleSelection.addEventListener('change', () => {
    listByRole();
});

function listByRole() {
    rolesSelectionDiv.innerHTML = "";
    workers.forEach(worker => {
        if (worker.role === roleSelection.value) {
            rolesSelectionDiv.innerHTML += `${worker.name} : ${worker.role}</br>`;
        }
        if (roleSelection.value === '') {
            rolesSelectionDiv.innerHTML += `${worker.name} : ${worker.role}</br>`;
        }
    });
    chalange27.appendChild(rolesSelectionDiv);
}

//chalange 28
chalange28.innerHTML = "";

const chalange28Table = document.createElement('table');
chalange28Table.style.fontSize = "8px";
const chalange28TableRow = document.createElement('tr');
Object.keys(workers[0]).forEach(key => {
    chalange28TableRow.innerHTML += `
        <th>${key}</th>
    `
});
chalange28Table.appendChild(chalange28TableRow);
workers.forEach(worker => {
    const TableRow = document.createElement('tr');
    Object.keys(workers[0]).forEach(key => {
        TableRow.innerHTML += `
        <td>${worker[key]}</td>
    `
    });
    chalange28Table.appendChild(TableRow);
});

chalange28.appendChild(chalange28Table);

//chalange 29
chalange29.innerHTML = "";
let sortingWorkers = [...workers];

displayWorkersChalange29(sortingWorkers);

function sorting(key) {
    sortingWorkers.sort((a, b) => {
        if (!isNaN(a[key]) && !isNaN(b[key])) {
            return a[key] - b[key];
        }
        return String(a[key]).localeCompare(String(b[key]));
    });

    displayWorkersChalange29(sortingWorkers);
}

function displayWorkersChalange29(workersArray) {
    chalange29.innerHTML = "";
    const chalange29Table = document.createElement('table');
    chalange29Table.style.fontSize = "8px";
    const chalange29TableRow = document.createElement('tr');
    Object.keys(workers[0]).forEach(key => {
        chalange29TableRow.innerHTML += `
        <th style="cursor: pointer;" onclick="sorting('${key}')">${key}</th>
    `
    });
    chalange29Table.appendChild(chalange29TableRow);
    workersArray.forEach(worker => {
        const TableRow = document.createElement('tr');
        Object.keys(workersArray[0]).forEach(key => {
            TableRow.innerHTML += `
        <td>${worker[key]}</td>
        `
        });
        chalange29Table.appendChild(TableRow);
    });
    chalange29.appendChild(chalange29Table);
}

//chalange 30
chalange30.innerHTML = "";

const newHIredWorkers = [
    { id: 6, name: 'Alice Dupont', role: 'Manager', city: 'Paris', salary: 60000, active: true, hireDate: '2023-01-15' },
    { id: 7, name: 'Bob Martin', role: 'Developer', city: 'Lyon', salary: 55000, active: true, hireDate: '2022-06-10' }
]

const workersadded = workers.concat(newHIredWorkers);
chalange30.innerHTML = "rhe workers with the new hired</br>";
workersadded.forEach((worker) => {
    chalange30.innerHTML += `${worker.name}</br>`;
});

//chalange 31
chalange31.innerHTML = "";
chalange31.innerHTML = `<button id="btnToSaveInLocalStorage">click to save workers in local storage</button>`;

btnToSaveInLocalStorage = document.getElementById('btnToSaveInLocalStorage');

btnToSaveInLocalStorage.addEventListener('click', () => {
    localStorage.setItem("worker", JSON.stringify(workers));
    chalange31.innerHTML += 'the data saves'
});

//chalange 32
chalange32.innerHTML = "";
chalange32.innerHTML = `<button id="btnToLoadFromStorage">click to load workers from local storage</button>`;
btnToLoadFromStorage = document.getElementById('btnToLoadFromStorage');

btnToLoadFromStorage.addEventListener('click', () => {
    const workersFromStorage = JSON.parse(localStorage.getItem("worker"));

    if (!workersFromStorage) {
        alert('there is no data saved')
    }
    workersFromStorage.forEach(worker => {
        chalange32.innerHTML += `${worker.name} </br>`;
    });
});

// chalange 33
chalange33.innerHTML = "";

chalange33.innerHTML = workers.reduce((theHTML, worker) => {
    return theHTML + `<span>${worker.name} - ${worker.role}<span></br>`;
}, "");

// chalange 34
chalange34.innerHTML = "";

for (const { name, city, salary } of workers) {
    chalange34.innerHTML += `<span>${name}-${city}-${salary}</span></br>`;
}

//chalange 35
chalange35.innerHTML = "";


chalange35.innerHTML = `<button id="changeInWorker0">try to chenge the worker alisa</button></br>`;

changeInWorker0 = document.getElementById('changeInWorker0');

changeInWorker0.addEventListener('click', () => {

    Object.freeze(workers[0]);

    workers[0].name = "changed";
    workers[1].name = "changed";
    workers[2].name = "changed";
    workers[3].name = "changed";
    workers[4].name = "changed";

    workers.forEach(worker => {
        chalange35.innerHTML += `<span>${worker.name}</span></br>`;
    });
});

//chalange 36
chalange36.innerHTML = "";

const uniqueCity = [...new Set(workers.map(worker => { return worker.city }))];

uniqueCity.forEach(city => {
    chalange36.innerHTML += `<span>${city}</span></br>`;
});

//chalange 37
chalange37.innerHTML = "";
chalange37.innerHTML = "<span>Employees hired after Jan 1, 2024: </span></br>";


workers.forEach(worker => {
    if ("2024-01-01".localeCompare(worker.hireDate) < 0) {
        chalange37.innerHTML += `<span>${worker.name} - ${worker.hireDate}</span></br>`;
    }
});

//chalange 38
chalange38.innerHTML = "";

chalange38.innerHTML = `<form id="chalange38Form">
                        <input id="chalange38Input" placeholder='the salary must be a number'>
                        <button type="submit">submit</button>
                        </form>`;

const chalange38Form = document.getElementById('chalange38Form');
const chalange38Input = document.getElementById('chalange38Input');
const numberREGIX = /^\d+$/;
chalange38Form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (numberREGIX.test(chalange38Input.value)) {
        chalange38.innerHTML = "✓ Valid form submission!";
    } else {
        chalange38.innerHTML = "✗ Error: Salary must be numeric!";
    }
});

//chalange 39
chalange39.innerHTML = "";

chalange39.innerHTML = "<span>the new workers</span></br>";

const newArrayToSpliced = workers.toSpliced(2, 2);

newArrayToSpliced.forEach(worker=>{
    chalange39.innerHTML += `<span>${worker.name}</span></br>`;
});

//chalange 40 
chalange40.innerHTML = "";

const workersFiltred = workers.filter(worker=> worker.role === 'Manager')
                              .map(worker=>{return {name: worker.name, salary : worker.salary}})
                              .sort((a,b)=>a.name.localeCompare(b.name));
workersFiltred.forEach(worker=>{
    chalange40.innerHTML += `<span>${worker.name} - ${worker.salary}</span></br>`;
});