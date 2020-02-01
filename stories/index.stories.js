import '../elementary/gtk-3.0/gtk.css';
import './icons/icons.css';

export default { title: 'Buttons' };

export const Button = () => `
<button>
  <label>Regular Button</label>
</button>
<button class="circular">
  <label>C</label>
</button>
<button class="flat">
  <label>Flat Button</label>
</button>
<button class="flat circular">
  <label>C</label>
</button>
<button class="destructive-action">
  <label>Destructive Action Button</label>
</button>
<button class="suggested-action">
  <label>Suggested Action Button</label>
</button>
`;
