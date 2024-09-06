// source of code: chatGPT
// display title "The Tech Blog" or "Your Dashboard"
const context = {
    isDashboard: window.location.href.includes("/dashboard")
  };
  
const template = Handlebars.compile(`
    {{#if isDashboard}}
        <h1>Your Dashboard</h1>
    {{else}}
        <h1>The Tech Blog</h1>
    {{/if}}
`);
  
const html = template(context);
document.getElementById('content').innerHTML = html;
  