function startDictation() {

    if (window.hasOwnProperty('webkitSpeechRecognition')) {

        var recognition = new webkitSpeechRecognition();

        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.lang = "en-US";
        document.getElementById('mic-image').src = "https://img.icons8.com/material/24/000000/microphone.png"
        recognition.start();

        recognition.onresult = function (event) {
            document.getElementById('transcript').value = document.getElementById('transcript').value +
                event.results[0][0].transcript;
            // setTimeout(100)
            recognition.stop();
            document.getElementById('mic-image').src = "https://img.icons8.com/material-sharp/24/000000/block-microphone.png"
            console.log(document.getElementById('labnol'))
            document.getElementById('labnol').submit();
        };

        recognition.onerror = function (event) {
            recognition.stop();
            document.getElementById('mic-image').src = "https://img.icons8.com/material-sharp/24/000000/block-microphone.png"
        }

    }
}