// Array para armazenar estudantes e notas sem BD
let students = [];

// Função para atribuir notas aleatórias de 0 á 20
function assignGrades() {
    const name = document.getElementById("name").value;
    const matricula = document.getElementById("matricula").value;

    if (name && matricula) {
        const grade = Math.floor(Math.random() * 21); // Nota entre 0 e 20
        students.push({ name, matricula, grade });
        alert(`Nota atribuída a ${name} com sucesso!`);
        clearForm();
    } else {
        alert("Por favor, insira o nome e número de matrícula.");
    }
}

// função para limpar o formulário, porém somente funciona se a o butão limpar estiver activado 
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("matricula").value = "";
}

// função para Salvar notas (sem funcionalidade real)
function saveGrades() {
    alert("Funcionalidade de salvar não implementada.");
}

// função para exibir o popup com as notas dos estudantes 
function viewGrades() {
    const resultList = document.getElementById("resultList");
    resultList.innerHTML = "";  // limpar lista

    let id = 0
    students.forEach((student) => {
     
        const listItem = document.createElement("table");
        
        listItem.innerHTML = `
            <tr>
                <td>ID</td>
                <td>Nome</td>
                <td>Matricula</td>
                <td>Nota</td>
                <td>Estado</td>
            </tr>
        `

        // adicionar nome, Matrícula e notas em linhas separadas  
        listItem.innerHTML = `
            <tr>
                <td>${++id}</td>
                <td>${student.name}</td>
                <td>${student.matricula}</td>
                <td>${student.grade}</td>
                <td>${studentStatus(student.grade)}</td>
            </tr>    
        `;
        resultList.appendChild(listItem);
    });
    document.getElementById("popup").style.display = "flex";
    
}

function deleteRecord(){
    const numberStudentRemove = document.getElementById("matricula")
    const updatedStudents = students.filter((student) => student.matricula !== numberStudentRemove);
    console.log(updatedStudents);
    // Saída: [ { id: 1, name: "João" }, { id: 3, name: "Ana" } ]
}

function studentStatus(grade) {
    if(Number(grade) < 6) {
        return "Reprovado"
    } else if(Number(grade) < 10) {
        return "Recurso"
    } else return "Aprovado"
}

// função para fechar o PopUp
function closePopup (){
document.getElementById("popup").style.display = "none"; 

// Seleciona o container para o efeito de ondas
const container = document.getElementById('wave-effect'); 

// Função para adicionar o efeito de ondulatório
function addWaveEffect (event){
    const wave = document.createElement ('span');
    wave.classList.add('wave'); 
    wave.style.left =`${event.clientX}px`;
    wave.style.left =`${event.clienty}px`;
    container.appendChild (wave); 

    
    // removendo o efeito após a animação 
    setTimeout (()=> {
        wave.remove(); 
    }, 600); 
        
    } 

}

// Verficar se o containers existe antes de adiconar o eventode mousemovve. 
if (container){
    container.addWaveEffect ('mousemove', addWaveEffect);  
    
} // fim temporário até a proxima Aula. 

// Atualizar a hora do sistema
function updateSystemTime() {
    const timeElement = document.getElementById("systemTime");
    const now = new Date();
    const timeString = now.toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    timeElement.innerHTML = `<strong>Hora do Sistema:</strong> ${timeString}`;
}

// Atualizar a hora a cada segundo
setInterval(updateSystemTime, 1000);

// Executar uma vez ao carregar a página
updateSystemTime();


