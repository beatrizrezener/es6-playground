class App {
  constructor() {
    this.repositories = [];

    this.formElement = document.getElementById('repo-form');
    this.listElement = document.getElementById('repo-list');
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
    
    this.render();
  }

  render() {
    this.listElement.innerHTML = '';
    this.repositories.forEach(repo => {
      let imgElement = document.createElement('img'); // scope variable
      imgElement.setAttribute('src', repo.avatar_url);
      
      let nameElement = document.createElement('strong');
      nameElement.appendChild(document.createTextNode(repo.name));

      let descriptionElement = document.createElement('p');
      descriptionElement.appendChild(document.createTextNode(repo.description));

      let linkElement = document.createElement('a');
      linkElement.setAttribute('targe', '_blank');
      linkElement.appendChild(document.createTextNode('Repository Link'));

      let listItemElement = document.createElement('li');
      listItemElement.appendChild(imgElement);
      listItemElement.appendChild(nameElement);
      listItemElement.appendChild(descriptionElement);
      listItemElement.appendChild(linkElement);

      this.listElement.appendChild(listItemElement);
    });
  }
}

new App();