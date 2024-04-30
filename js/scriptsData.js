// read data from json file

let http = new XMLHttpRequest();
http.open('GET', 'Data/data.json', true);
http.send();

http.onload = function () {

    if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText);

        let outputP = "";
        let outputF = "";

        data.programming.forEach((item) => {
            // data de java
            if (item.name == "Java") {
                document.getElementById('namejava').innerHTML = item.name.toUpperCase();
                const javaprogressbar = document.getElementById('javaprogessbar');
                javaprogressbar.innerHTML = item.level + "%";
                javaprogressbar.style.width = item.level + "%";
                javaprogressbar.setAttribute('aria-valuenow', item.level);

            }
            // data de python
            if (item.name == "Python") {
                document.getElementById('namepython').innerHTML = item.name.toUpperCase();
                const pythonprogressbar = document.getElementById('pythonprogessbar');
                pythonprogressbar.innerHTML = item.level + "%";
                pythonprogressbar.style.width = item.level + "%";
                pythonprogressbar.setAttribute('aria-valuenow', item.level);

            }





            // Calcul de la longueur de la barre de progression en pourcentage
            const circleLength = Math.PI * 2 * 40;
            const progressLength = circleLength * (item.level / 100);

            outputP += `
                <div class="col-4">
                    <svg class="progress-circle" viewBox="0 0 100 100">
                        <circle class="progress-circle-bg" cx="50" cy="50" r="40"></circle>
                        <circle class="progress-circle-bar" cx="50" cy="50" r="40" stroke-dasharray= "${progressLength} ${circleLength}" ></circle>
                        <text class="progress-circle-text" x="50" y="50">${item.level}%</text>
                    </svg>
                    <p class="text-center col-8" >${item.name}</p>
                </div>
            `;
        });

        data.framework.forEach((item) => {

            // data de spring
            if (item.name === "Spring") {
                document.getElementById('namespring').innerHTML = item.name.toUpperCase();
                const springprogressbar = document.getElementById('springprogessbar');
                springprogressbar.innerHTML = item.level + "%";
                springprogressbar.style.width = item.level + "%";
                springprogressbar.setAttribute('aria-valuenow', item.level);
            }

            // data de angular
            if (item.name === "Angular") {

                document.getElementById('nameangular').innerHTML = item.name;
                const angularprogessbar = document.getElementById('angularprogessbar');
                angularprogessbar.innerHTML = item.level + "%";
                angularprogessbar.style.width = item.level + "%";
                angularprogessbar.setAttribute('aria-valuenow', item.level);
            }else {
                document.getElementById('nameangular').innerHTML = "<span class=\"placeholder col-6\"></span>";
                const angularprogessbar = document.getElementById('angularprogessbar');
                angularprogessbar.innerHTML = "0%";
                angularprogessbar.style.width = "0%";
                angularprogessbar.classList.add('placeholder');
                angularprogessbar.setAttribute('aria-valuenow', 0);
            }





            // Calcul de la longueur de la barre de progression en pourcentage
            const circleLength = Math.PI * 2 * 40;
            const progressLength = circleLength * (item.level / 100);
            outputF += `
                 <div class="col-4">
                    <svg class="progress-circle" viewBox="0 0 100 100">
                        <circle class="progress-circle-bg" cx="50" cy="50" r="40"></circle>
                        <circle class="progress-circle-bar" cx="50" cy="50" r="40" stroke-dasharray= "${progressLength} ${circleLength}" ></circle>
                        <text class="progress-circle-text" x="50" y="50">${item.level}%</text>
                    </svg>
                    <p class="text-center col-8" >${item.name}</p>
                </div>
            `;
        });



        document.getElementById('languageOutput').innerHTML = outputP;
        document.getElementById('frameworkOutput').innerHTML = outputF;
    } else {
        console.log('Error');
    }

}
