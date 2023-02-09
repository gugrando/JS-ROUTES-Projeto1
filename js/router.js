export class Router {
  routes = {}

  add(routeName, page){
    this.routes[routeName] = page
  }
  
  route(event){
    event = event || window.event 
    event.preventDefault() 
    
    window.history.pushState({}, "", event.target.href)
    this.handle()
  }

  handle(){
    const appDisplay = document.querySelector("#app")
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]

    fetch(route).then(data => data.text())
    .then(html => { appDisplay.innerHTML = html})
  }
}



