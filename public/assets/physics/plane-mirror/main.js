document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
            "#loader").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
    }
};

window.onload = function() {
    /*
    //Declaration of Variable
    let mirrorBtn = document.getElementById("mirrorBtn")
    let incidenceBtn = document.getElementById("incidenceBtn");
    let incidenceslide01 = document.getElementById("incidence-slide01");
    let mirrorslide01 = document.getElementById("mirror-slide01");
    let incidenceRayBtn = document.getElementById("incidenceRayBtn");
    let mirrorRayBtn = document.getElementById("mirrorRayBtn");
    let grayBtn = document.getElementById("mirrorGrayBtn");


    //declaring counter to guide the dialogue
    var counter = 0;

    let line = document.getElementById("reflection-line");

    //Dialogue System
    mirrorBtn.addEventListener('click', function() {
        console.log("Mirror")
    })
    incidenceBtn.addEventListener('click', function() {})
    mirrorRayBtn.addEventListener('click', function() {

    })
    incidenceRayBtn.addEventListener('click', function() {

    })
    grayBtn.addEventListener('click', function() {

    })

    mirrorBtn.addEventListener('click', function() {
        counter++;
        CheckTheCounter();
    }, {
        once: true
    });
    incidenceBtn.addEventListener('click', function() {
        counter++;
        CheckTheCounter();
    }, {
        once: true
    });


    //Check the counter function in-charge of setting attribute based on counter counts;
    function CheckTheCounter() {
        if (counter == 2) {
            line.setAttribute('visible', 'false');
            mirrorBtn.remove();
            incidenceBtn.remove();
            mirrorRayBtn.setAttribute('visible', 'true');
            incidenceRayBtn.setAttribute('visible', 'true');
            grayBtn.setAttribute('visible', 'true');
        }
    }
    */
    window.onload = function() {
        audio.setAttribute('src', 'audio/slide01-01.mp3');
        audio.play();
        audio.loop = false;
    }

    let mirrorBtnSlide01 = document.getElementById("mirror-btn-slide01");
    let incidenceBtnSlide01 = document.getElementById("incidence-btn-slide01");
    let mirrorImgSlide01 = document.getElementById("mirror-slide01");
    let incidenceImgSlide01 = document.getElementById("incidence-slide01");
    let mirrorBtnSlide02 = document.getElementById("mirror-btn-slide02");
    let incidenceBtnSlide02 = document.getElementById("incidence-btn-slide02");
    let grayBtnSlide02 = document.getElementById("gray-btn-slide02");
    let greenBtnSlide03 = document.getElementById("greenDot-btn-slide03");
    let yellowBtnSlide03 = document.getElementById("yelloWDot-btn-slide03");
    let redBtnSlide03 = document.getElementById("redDot-btn-slide03");

    var counter = 0;
    let audio = document.getElementById("mainAudio");

    // Slide01 base interaction 
    mirrorBtnSlide01.addEventListener('click', function() {
        mirrorImgSlide01.setAttribute('visible', 'true')
        audio.pause();
        audio.setAttribute('src', 'audio/slide01-03.mp3');
        audio.play();
        audio.loop = false;

    });
    incidenceBtnSlide01.addEventListener('click', function() {
        incidenceImgSlide01.setAttribute('visible', 'true');
        audio.pause();
        audio.setAttribute('src', 'audio/slide01-02.mp3');
        audio.play();
        audio.loop = false;
    });

    //seperate button function for score counter.. make this function work only once
    mirrorBtnSlide01.addEventListener('click', function() {
        counter++;
        setTimeout(CheckCounter, 10000);
    }, {
        once: true
    });
    incidenceBtnSlide01.addEventListener('click', function() {
        counter++;
        setTimeout(CheckCounter, 10000);
    }, {
        once: true
    });

    //Slide02 base interaction
    mirrorBtnSlide02.addEventListener('click', function() {
        audio.pause();
        audio.setAttribute('src', 'audio/slide02-03.mp3');
        audio.play();
        audio.loop = false;
    });
    incidenceBtnSlide02.addEventListener('click', function() {
        audio.pause();
        audio.setAttribute('src', 'audio/slide02-02.mp3');
        audio.play();
        audio.loop = false;
    });
    grayBtnSlide02.addEventListener('click', function() {
        audio.pause();
        audio.setAttribute('src', 'audio/slide02-04.mp3');
        audio.play();
        audio.loop = false;
    });

    //seperate button function for score counter.. make this function work only once
    mirrorBtnSlide02.addEventListener('click', function() {
        counter++;
        setTimeout(CheckCounter, 10000);
    }, {
        once: true
    });
    incidenceBtnSlide02.addEventListener('click', function() {
        counter++;
        setTimeout(CheckCounter, 10000);
    }, {
        once: true
    });
    grayBtnSlide02.addEventListener('click', function() {
        counter++;
        setTimeout(CheckCounter, 10000);
    }, {
        once: true
    });

    //Slide03 base interaction

    greenBtnSlide03.addEventListener('click', function() {
        audio.pause();
        audio.setAttribute('src', 'audio/slide03-02.mp3');
        audio.play();
        audio.loop = false;
    });
    yellowBtnSlide03.addEventListener('click', function() {
        audio.pause();
        audio.setAttribute('src', 'audio/slide03-03.mp3');
        audio.play();
        audio.loop = false;
    });
    redBtnSlide03.addEventListener('click', function() {
        audio.pause();
        audio.setAttribute('src', 'audio/slide03-01.mp3');
        audio.play();
        audio.loop = false;
    });

    //seperate button function for score counter.. make this function work only once
    greenBtnSlide03.addEventListener('click', function() {
        counter++;
        setTimeout(CheckCounter, 5000);
    }, {
        once: true
    });
    yellowBtnSlide03.addEventListener('click', function() {
        counter++;
        setTimeout(CheckCounter, 5000);
    }, {
        once: true
    });
    redBtnSlide03.addEventListener('click', function() {
        counter++;
        setTimeout(CheckCounter, 5000);
    }, {
        once: true
    });

    function CheckCounter() {
        console.log(counter);
        if (counter == 2) {
            document.getElementById("slide01").remove();
            document.getElementById("slide02").setAttribute('visible', 'true');

            //PlayAudio for slide02 introduction
            audio.pause();
            audio.setAttribute('src', 'audio/slide02-01.mp3');
            audio.play();
            audio.loop = false;
        } else if (counter == 5) {
            document.getElementById("slide02").remove();
            document.getElementById("slide03").setAttribute('visible', 'true');
        }
    }

}