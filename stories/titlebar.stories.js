import '../elementary/gtk-3.0/gtk.css';
import './icons/icons.css';
import './css/window.css';

export default { title: 'Windows' };

export const titlebar = () => `
<div class="window-frame">
  <div class="titlebar">
    <button class="titlebutton button">
      <span class="e-icon-close"></span>
    </button>
    <label class="title">Example Titlebar</label>
    <button class="titlebutton button">
      <span class="e-icon-fullscreen"></span>
    </button>
  </div>
</div>
`;

export const infobar = () => `
<infobar class="warning">
  <label>This is an example infobar.</label>
  <button class="button"><label>Infobar Button</label></button>
</infobar>
`;
