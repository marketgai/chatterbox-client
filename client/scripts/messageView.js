var MessageView = {

  render: _.template(`

      <div class="chat">
        <div class="username"><%- username %></div>
        <div class="text"><%- text %></div>
        <div class="time"><%- createdAt %></div>
      </div>
    `)

};