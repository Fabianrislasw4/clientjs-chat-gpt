const chatUI = (isAi, value, uniqueId) => {
    return (
        `
          <div class="wrapper ${isAi && 'ai'}">
              <div class="chat">
                  
                  <div class="profile">
                  </div>

                  <div class="message" id=${uniqueId}>${value}</div>
                  
              </div>
          </div>
      `
    )
}

export default chatUI;