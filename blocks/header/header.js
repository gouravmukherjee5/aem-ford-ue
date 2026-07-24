import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  // load nav as fragment
  console.log("test ");
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
  const fragment = await loadFragment(navPath);
  console.log(navMeta);
   console.log(navPath);
   console.log(fragment);
   const toolbar = document.createElement('div');

   const buttons = [
    { text: 'Home', icon: '🏠', href: '/' },
    { text: 'Search', icon: '🔍', href: '/search' },
    { text: 'Profile', icon: '👤', href: '/profile' },
    { text: 'Settings', icon: '⚙️', href: '/settings' }
  ];

  buttons.forEach((button) => {
    const link = document.createElement('a');
    link.href = button.href;
    link.className = 'toolbar-button';
    link.innerHTML = `
      <span class="icon">${button.icon}</span>
      <span class="label">${button.text}</span>
    `;
    toolbar.appendChild(link);
  });

  block.appendChild(toolbar);

}
