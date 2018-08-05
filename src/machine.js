export default {
  initial: "noRequest",
  states: {
    noRequest: {
      onEntry: "clearAllReq",
      on: {
        setNextRequest: "makingRequest"
      }
    },
    makingRequest: {
      onEntry: "runCurrentRequest",
      on: {
        requestDone: "noRequest",
        setNextRequest: "disabled"
      }
    },
    disabled: {
      on: {
        requestDone: "makingRequest"
      }
    }
  }
};
