const genManager = function (manager) {
return `
<section class="card-title">
    <p class="name">${manager.name}</p>
    <p class="fa-solid fa-mug-hot"> Manager</p>
</section>
<section>
    <p class="id">ID: ${manager.id}</p>
    <p class="email">Email: <a href="mailto:john@abc.com">${manager.email}</a></p>
    <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
</section>
`
}

const genEngineer = function (engineer) {
    return `
    <section class="card-title">
                <p class="name"></p>
                <p class="fa-solid fa-glasses"> Engineer</p>
            </section>
            <section>
                <p class="id">ID: ${engineer.id} </p>
                <p class="email">Email: <a href="mailto:john@abc.com"></a>${engineer.email}</p>
                <p class="gitHub" href="https://github.com/${engineer.gitHub}" target="_blank" rel="noopener noreferrer" >GitHub</p>
            </section>
            `
}

const genIntern = function (intern) {
    return `
    <section class="card-title">
                <p class="name">${intern.name}</p>
                <p class="fa-solid fa-user-graduate"> Intern</p>
            </section>
            <section>
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}"></a>$</p>
                <p class="school">School: ${intern.school}</p>
            </section>`
}

module.exports = templatehelper;