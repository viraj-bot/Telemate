function startDictation() {

    if (window.hasOwnProperty('webkitSpeechRecognition')) {
        var recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = "en-US";
        document.getElementById('mic').src = "https://i.ibb.co/mRwqpYw/mic.png"
        recognition.start();

        recognition.onresult = function (event) {
            document.getElementById('transcript').value = document.getElementById('transcript').value +
                event.results[0][0].transcript;
            recognition.stop();
            document.getElementById('mic').src = "https://i.ibb.co/kS74wtp/mic-off.png"
            console.log(document.getElementById('labnol'))
            document.getElementById('labnol').submit();
        };

        recognition.onerror = function (event) {
            recognition.stop();
            document.getElementById('mic').src = "https://i.ibb.co/kS74wtp/mic-off.png"
        }

    }
}