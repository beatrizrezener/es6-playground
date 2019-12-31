import api from './api';

class App {
  constructor() {
    this.repositories = [];

    this.formElement = document.getElementById('repo-form');
    this.inputElement = document.querySelector('input[name=repository]');
    this.listElement = document.getElementById('repo-list');

    this.registerHandlers();
  }

  registerHandlers() {
    this.formElement.onsubmit = event => this.addRepository(event);
  }

  async addRepository(event) {
    event.preventDefault(); // avoid default refresh

    const repoInput = this.inputElement.value;

    if(repoInput.length === 0) return;

    const response = await api.get(`/repos/${repoInput}`);

    const { name, description, html_url, owner: { avatar_url } } = response.data;

    this.repositories.push({
      name,
      description,
      avatar_url,
      html_url,
    });
    
    this.inputElement.value = '';

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
      linkElement.setAttribute('target', '_blank');
      linkElement.setAttribute('href', repo.html_url);
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