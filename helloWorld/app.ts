class Message {
    messageText: string;

    constructor(text) {
        this.messageText = text;
    }

    showAlert() {
        alert(this.messageText);
    }
}

let test = new Message('hello world');
test.showAlert();