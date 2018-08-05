export default {
  initial: "noRequest",
  states: {
    noRequest: {
      onEntry: "clearAllReq",
      on: {
        makeRequest: "makingRequest"
      }
    },
    makingRequest: {
      onEntry: "runCurrentReq",
      on: {
        requestDone: "noRequest",
        makeRequest: "disabled"
      }
    },
    disabled: {
      onEntry: "storeSecondReq",
      on: {
        requestDone: "makingRequest"
      },
      onExit: "moveSecondToCurrent"
    }
  }
};
