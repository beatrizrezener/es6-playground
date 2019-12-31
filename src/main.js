class App {
  constructor() {
    this.repositories = [];

    this.formElement= document.getElementById('repo-form');
    this.registerHandlers();
  }

  registerHandlers() {
    this.formElement.onsubmit = event => this.addRepository(event);
  }

  addRepository(event) {
    event.preventDefault(); // avoid default refresh
    this.repositories.push({
      name: 'beatrizrezener',
      description: 'my repository ;D',
      avatar_url: 'https://avatars2.githubusercontent.com/u/3225662?s=400&v=4',
      html_url: 'http://github.com/beatrizrezener',
    });
    console.log(this.repositories);
  }
}

new App();