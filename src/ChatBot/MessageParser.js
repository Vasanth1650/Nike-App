class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
      const lowercase = message.toLowerCase()

      if(lowercase.includes("hello")){
        this.actionProvider.greet();
      }
      
      if (lowercase.includes("javascript") || lowercase.includes("js")) {
        this.actionProvider.handleJavascriptQuiz();
      }
    }
  }
  
  export default MessageParser;