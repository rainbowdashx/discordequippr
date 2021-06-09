<script>
    import { authKey, userName } from "./store.js";
    import Status from "./Status.svelte";
    import jQ from "jquery";

    let timeControl;
    let nextWorkControl = {};
    let lastUsedCaptcha;
    let status = "Dormant";
    let statusTimer = {};

    const dormant = "😇";
    const running = "😱";
    let buttonText = dormant;

    function startTimer(label) {
        clearTimeout(nextWorkControl[label]);
        let secPadding = Math.random() * 60;
        let cd = {
            "!work": 3,
            "!search": 7,
        };
        let funcs={
            "!work": sendMessageWork,
            "!search": sendMessageSearch,
        }
        let time = (secPadding + cd[label] * 60) * 1000;
        console.log({
            cd:cd[label],
            msg : label
        });
        buttonText = running;
        statusTimer[label] = time + Date.now();
        nextWorkControl[label] = setTimeout(() => {
           funcs[label]();
        }, time);
    }

    function startCaptchaSolver() {
        clearInterval(timeControl);
        timeControl = setInterval(() => {
            try {
                let msg = jQ(".mention:Contains(" + $userName + ")")
                    .parent("div:Contains(Captcha ausgewählt)")
                    .last()
                    .text();

                let addition = msg.match(/\d+.*\+.*\d+/)[0];
                if (lastUsedCaptcha !== addition) {
                    lastUsedCaptcha = addition;

                    addition = addition.split("+");

                    let result = addition.reduce((acc, x) => {
                        return (acc = acc + parseInt(x));
                    }, 0);

                    sendMessage("!solve " + result);
                    status = "Captcha solved: " + result;
                }
            } catch (error) {}
        }, 10000);
    }

    function sendMessageWork() {
        sendMessage("!work");
    }
    function sendMessageSearch() {
        sendMessage("!search");
    }

    function sendMessage(msg) {
        clearTimeout(timeControl);
        status =
            "Send msg: " +
            msg +
            " " +
            new Date(Date.now()).toTimeString().slice(0, 9);
        let body = {
            content: msg,
            tts: false,
        };
        fetch(
            "https://discord.com/api/v9/channels/775764111602614363/messages",
            {
                headers: {
                    authorization: $authKey,
                    "content-type": "application/json",
                },
                body: JSON.stringify(body),
                method: "POST",
                mode: "cors",
                credentials: "include",
            }
        ).then((res) => {
            startTimer(msg);
            startCaptchaSolver();
        });
    }
</script>

<div>
    <button
        on:click={() => {
            sendMessageWork();
            setTimeout(() => sendMessageSearch(), 15000);
        }}
    >
        {buttonText}
    </button>

    <Status {status} timer={statusTimer} />
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    button {
        background-color: orange;
        border: 1px solid black;
        padding: 4px 10px;
        cursor: pointer;
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 32px;
    }
</style>
