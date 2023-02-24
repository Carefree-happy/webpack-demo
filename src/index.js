import _ from 'lodash';
import Print from './print';

async function getComponent() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.onclick = Print.bind(null, 'Hello webpack!');

    return element;
}


getComponent().then((component) => {
    document.body.appendChild(component);
});
