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
  

// {{!-- display title on the page --}}
//             {{!-- public/js/dashboard.js --}}
//             {{#if isDashboard}}
//             <h1>Your Dashboard</h1>
//             {{else}}
//             <h1>The Tech Blog</h1>
//             {{/if}}

//             {{!-- <a href="/profile">profile</a> |
//             <button class="no-button" id="logout">logout</button> --}}




// {{!-- <h1><a href="/">The Tech Blog</a></h1> --}}
//             <h1>The Tech Blog</h1>          